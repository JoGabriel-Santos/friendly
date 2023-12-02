import mongoose from "mongoose";

const letterSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Sending",
        required: false,
    },
});

const penpalSchema = mongoose.Schema({
    penpal_1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    penpal_2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    letters: {
        type: [letterSchema],
        default: [],
    },
});

export default mongoose.model("Penpal", penpalSchema);