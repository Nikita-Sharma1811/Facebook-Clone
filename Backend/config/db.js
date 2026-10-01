import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://nikita:nikita@cluster0.xbsgbtc.mongodb.net/");
        console.log("MongoDB connected Successfully ✅");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
