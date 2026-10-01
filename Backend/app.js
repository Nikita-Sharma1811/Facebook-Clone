import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app = express();
//facebook-black-pi.vercel.app/

app.use(cors({
    origin: "https://facebook-black-pi.vercel.app"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
app.use("/api", userRoutes);
app.use("/api/posts", postRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API working 🚀");
});

export default app;
