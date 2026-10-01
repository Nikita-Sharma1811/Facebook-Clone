import express from "express";
import Post from "../models/post.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/post", (req, res) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }

    try {
      const caption = req.body?.caption?.trim() ?? "";
      const imageUrl = req.body?.imageUrl?.trim() ?? "";

      let image = imageUrl;

      if (req.file) {
        image = `/uploads/${req.file.filename}`;
      }

      if (!caption && !image) {
        return res.status(400).json({
          success: false,
          message: "Please add a caption, upload a file, or paste a media link",
        });
      }

      const newPost = new Post({ caption, image });
      await newPost.save();

      res.status(201).json({
        success: true,
        message: "Post added successfully",
        post: newPost,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error creating post" });
    }
  });
});

router.get("/posts", async (_req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching posts" });
  }
});

export default router;
