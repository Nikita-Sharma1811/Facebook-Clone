import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mydb");
        console.log("MongoDB connected Successfully ✅");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;