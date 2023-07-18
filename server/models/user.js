import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
        required: false,
    },
    proficiency: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    topics: {
        type: [String],
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
});

const User = mongoose.model("User", userSchema);

export default User;