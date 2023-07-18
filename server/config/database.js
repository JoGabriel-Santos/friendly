import mongoose from "mongoose";

const CONNECTION_URL = "mongodb+srv://friendly:yvRH71PmrSC5xSKs@friendly.dkyk4wo.mongodb.net/friendly?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB");

    } catch (error) {
        console.error("Error connecting to MongoDB: ", error.message);
        process.exit(1);
    }
};

export default connectDB;