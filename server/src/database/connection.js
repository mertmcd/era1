import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/era1db");
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;
