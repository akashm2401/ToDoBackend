import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDB = () => {
    // mongoose.connect("mongodb://localhost:27017/Todo");
    console.log(process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI);
}