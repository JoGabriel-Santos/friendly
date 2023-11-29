import mongoose from "mongoose";

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
        type: [Object],
        default: []
    }
});

export default mongoose.model("Penpal", penpalSchema);