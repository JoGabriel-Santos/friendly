import User from "../../models/user.js";
import Penpal from "../../models/penpal.js";
import Requests from "../../models/requests.js";

export const fetchPenpals = async (request, response) => {
    const { userId } = request.params;

    try {
        const penpals = await Penpal.find({
            $or: [{ penpal_1: userId }, { penpal_2: userId }],
        });

        const penpalIds = penpals.map(penpal => {
            return penpal.penpal_1._id.equals(userId) ? penpal.penpal_2 : penpal.penpal_1;
        });

        const detailedPenpals = await User.find({ _id: { $in: penpalIds } }, "email name country picture");

        const sentRequests = await Requests.find({
            fromUser: userId,
            status: "pending",
        }).populate("toUser", "email name country picture");

        response.status(200).json({ penpals: detailedPenpals, sentRequests });

    } catch (error) {
        response.status(500).json({ message: "Error fetching penpals", error });
    }
};