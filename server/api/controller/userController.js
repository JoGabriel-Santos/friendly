import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../../models/user.js";

const secret = "Y8bD7rK2sF9aZ1";

export const fetchUserData = async (request, response) => {
    const { email } = request.body;

    try {
        const userData = await User.findOne({ email });
        response.status(200).json(userData);

    } catch (error) {
        response.status(409).json({ message: error });
    }
};

export const changeUserInfo = async (request, response) => {
    const {
        email,
        name,
        birthday,
        proficiency,
        gender,
        topics,
        description,
    } = request.body;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return response.status(404).json({ message: "User not found" });
        }

        if (name) {
            user.name = name;
        }

        if (birthday) {
            user.birthday = birthday;
        }

        if (proficiency) {
            user.proficiency = proficiency;
        }

        if (gender) {
            user.gender = gender;
        }

        if (topics) {
            user.topics = topics;
        }

        if (description) {
            user.description = description;
        }

        await user.save();

        response.status(200).json();

    } catch (error) {
        response
            .status(500)
            .json({ message: "An error occurred while updating user information" });
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

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" });

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

        const newUser = await User.create({ name, email, password: hashedPassword, });

        const token = jwt.sign(
            { email: newUser.email, id: newUser._id }, secret, { expiresIn: "1h" });

        response.status(201).json({ result: newUser, token });

    } catch (error) {
        response.status(500).json({ message: "Internal server error" });
    }
};