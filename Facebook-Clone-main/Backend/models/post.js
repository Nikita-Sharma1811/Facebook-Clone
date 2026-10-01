import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post; // 🚨 THIS WAS MISSING