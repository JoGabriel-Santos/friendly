import User from "../../models/user.js";
import Penpal from "../../models/penpal.js";
import Requests from "../../models/requests.js";

export const createRequest = async (request, response) => {
    const { fromUser, toUser } = request.body;

    try {
        const existingRequest = await Requests.findOne({
            fromUser: fromUser,
            toUser: toUser,
            status: "pending",
        });

        if (existingRequest) {
            return response.status(400).json({ message: "Pending request already exists" });
        }

        const newRequest = new Requests({
            fromUser: fromUser,
            toUser: toUser,
            status: "pending",
        });

        await newRequest.save();
        response.status(201).json();

    } catch (error) {
        response.status(500).json({ message: "Error creating request" });
    }
};

export const handleFriendRequest = async (request, response) => {
    const { userId, senderId, acceptRequest } = request.body;

    try {
        if (acceptRequest) {
            await Requests.findOneAndUpdate(
                { fromUser: senderId, toUser: userId, status: "pending" },
                { $set: { status: "accepted" } },
                { new: true }
            );

            await Penpal.findOneAndUpdate(
                {
                    $or: [
                        { penpal_1: senderId, penpal_2: userId },
                        { penpal_1: userId, penpal_2: senderId },
                    ],
                },
                {},
                { upsert: true }
            );

        } else {
            await Requests.findOneAndUpdate(
                { fromUser: senderId, toUser: userId, status: "pending" },
                { $set: { status: "rejected" } },
                { new: true }
            );
        }

        response.status(200).json();

    } catch (error) {
        response.status(500).json({ message: "Error handling friend request" });
    }
};

export const getPendingRequests = async (request, response) => {
    const { userEmail } = request.params;

    try {
        const user = await User.findOne({ email: userEmail });

        if (!user) {
            return response.status(404).json({ message: "User not found" });
        }

        const pendingRequests = await Requests.find({
            toUser: user._id,
            status: "pending",
        }).populate("fromUser", "email name picture");

        if (pendingRequests.length > 0) {
            response.status(200).json({ hasPendingRequests: true, pendingRequests: pendingRequests });

        } else {
            response.status(200).json({ hasPendingRequests: false, pendingRequests: [] });
        }

    } catch (error) {
        response.status(500).json({ message: "Error fetching pending requests", error });
    }
};