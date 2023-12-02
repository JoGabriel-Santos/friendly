import User from "../../models/user.js";
import Penpal from "../../models/penpal.js";
import Requests from "../../models/requests.js";
import axios from "axios";

export const fetchPenpals = async (request, response) => {
    const { userId } = request.params;

    try {
        const penpals = await Penpal.find({
            $or: [{ penpal_1: userId }, { penpal_2: userId }],
        });

        const penpalIds = penpals.map(penpal => {
            return penpal.penpal_1._id.equals(userId) ? penpal.penpal_2 : penpal.penpal_1;
        });

        const detailedPenpals = await User.find({ _id: { $in: penpalIds } }, "email name description country latLong picture");

        const sentRequests = await Requests.find({
            fromUser: userId,
            status: "pending",
        }).populate("toUser", "email name description country latLong picture");

        response.status(200).json({ penpals: detailedPenpals, sentRequests });

    } catch (error) {
        response.status(500).json({ message: "Error fetching penpals", error });
    }
};

export const sendLetter = async (request, response) => {
    const { penpal1Id, penpal2Id, letter } = request.body;

    try {
        const penpal = await Penpal.findOne({
            $or: [
                { penpal_1: penpal1Id, penpal_2: penpal2Id },
                { penpal_1: penpal2Id, penpal_2: penpal1Id },
            ],
        });
        if (!penpal) {
            return response.status(404).json({ message: "Penpal not found" });
        }

        penpal.letters.push({
            content: letter.content,
            sender: letter.sender,
            time: letter.time,
        });

        await penpal.save();

        response.status(200).json({ message: "Letter sent successfully" });

    } catch (error) {
        response.status(500).json({ message: "Error sending letter", error });
    }
};

export const markLetterAsRead = async (request, response) => {
    const { penpal1Id, penpal2Id, letterId } = request.body;

    try {
        const userLogged = await User.findOne({ _id: penpal1Id });
        const penpal = await Penpal.findOne({
            $or: [
                { penpal_1: penpal1Id, penpal_2: penpal2Id },
                { penpal_1: penpal2Id, penpal_2: penpal1Id },
            ],
        });
        if (!penpal) {
            return response.status(404).json({ message: "Penpal not found" });
        }

        const letter = penpal.letters.find((letter) => letter._id.equals(letterId));
        if (!letter) {
            return response.status(404).json({ message: "Letter not found" });
        }

        if (userLogged.name !== letter.sender) {
            letter.status = "Read";
        }

        await penpal.save();

        response.status(200).json({ message: "Letter marked as Read successfully" });

    } catch (error) {
        response.status(500).json({ message: "Error marking letter as Read", error });
    }
};

export const lettersBetweenPenpals = async (request, response) => {
    const { penpal1Id, penpal2Id } = request.body;

    const TIME_OFFSET = 2 * 60 * 60 * 1000;

    try {
        const penpal = await Penpal.findOne({
            $or: [
                { penpal_1: penpal1Id, penpal_2: penpal2Id },
                { penpal_1: penpal2Id, penpal_2: penpal1Id },
            ],
        });

        if (!penpal) {
            return response.status(404).json({ message: "Penpal not found" });
        }

        let letters = penpal.letters;

        const currentTimeResponse = await axios.get("https://worldtimeapi.org/api/ip");
        const apiDateTime = new Date(currentTimeResponse.data.utc_datetime);
        const currentTime = new Date(apiDateTime.getTime() - TIME_OFFSET);

        const updateLetterContent = async (letter) => {
            const letterTime = new Date(`${letter.time}Z`);

            letterTime.setFullYear(2000);
            currentTime.setFullYear(2000);

            console.log(letterTime)
            console.log(currentTime)

            if (letterTime >= currentTime) {
                letter.content = "...";

            } else {
                letter.status = (letter.status === "Read") ? "Read" : "Received";
            }
        };

        letters.forEach(updateLetterContent);

        letters = letters.reverse();

        response.status(200).json({ letters });

    } catch (error) {
        console.error("Error getting letters", error);
        response.status(500).json({ message: "Error getting letters", error: error.message });
    }
};

export const removePenpalById = async (request, response) => {
    const { userLoggedId, penpalId } = request.body;

    try {
        const penpal = await Penpal.findOneAndDelete({
            $or: [
                { penpal_1: userLoggedId, penpal_2: penpalId },
                { penpal_1: penpalId, penpal_2: userLoggedId },
            ],
        });

        if (!penpal) {
            return response.status(404).json({ message: "Penpal not found" });
        }

        response.status(200).json({ message: "Penpal removed successfully" });

    } catch (error) {
        response.status(500).json({ message: "Error removing penpal", error });
    }
};