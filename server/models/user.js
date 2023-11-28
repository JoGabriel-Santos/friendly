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
    picture: {
        type: String,
        required: false,
    },
    birthday: {
        type: {},
        required: false,
    },
    proficiency: {
        type: [],
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    topics: {
        type: [],
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
    latLong: {
        type: {},
        required: false,
    },
});

const User = mongoose.model("User", userSchema);

export default User;