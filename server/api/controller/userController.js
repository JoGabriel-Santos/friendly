import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../../models/user.js";
import Requests from "../../models/requests.js";

const secret = "Y8bD7rK2sF9aZ1";

const generateToken = (user) => {
    return jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });
};

export const fetchUserData = async (request, response) => {
    const { userEmail } = request.params;

    try {
        const userData = await User.findOne({ email: userEmail });
        response.status(200).json(userData);

    } catch (error) {
        response.status(409).json({ message: error });
    }
};

export const fetchAllUsers = async (request, response) => {
    const { userEmail } = request.params;

    try {
        const loggedInUser = await User.findOne({ email: userEmail });
        if (!loggedInUser) {
            return response.status(404).json({ message: "User not found" });
        }

        const usersWithPendingOrRejectedRequestsSent = await Requests.distinct("toUser", {
            fromUser: loggedInUser._id,
            status: { $in: ["pending", "rejected"] },
        });

        const usersWithPendingOrRejectedRequestsReceived = await Requests.distinct("fromUser", {
            toUser: loggedInUser._id,
            status: { $in: ["pending", "rejected"] },
        });

        const usersWithPendingOrRejectedRequests = [
            ...usersWithPendingOrRejectedRequestsSent,
            ...usersWithPendingOrRejectedRequestsReceived,
        ];

        const allUsers = await User.find({
            email: { $ne: userEmail },
            _id: { $nin: usersWithPendingOrRejectedRequests },
        });

        response.status(200).json(allUsers);

    } catch (error) {
        response.status(409).json({ message: error });
    }
};

export const alterUserData = async (request, response) => {
    const { userEmail, updatedData } = request.body;

    try {
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return response.status(404).json({ message: "User not found" });
        }

        Object.keys(updatedData).forEach((key) => {
            user[key] = updatedData[key];
        });

        await user.save();

        return response.status(200).json({ message: "User data updated successfully" });

    } catch (error) {
        return response.status(500).json({ message: "Internal server error" });
    }
};

export const signin = async (request, response) => {
    const { email, password } = request.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return response.status(404).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return response.status(401).json({ message: "Incorrect password" });
        }

        const token = generateToken(existingUser);

        response.status(200).json({ result: existingUser, token });

    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
};

export const signup = async (request, response) => {
    const { name, email, password } = request.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return response.status(400).json({ message: "User already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({ name, email, password: hashedPassword });

        const token = generateToken(newUser);

        response.status(201).json({ result: newUser, token });

    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
};