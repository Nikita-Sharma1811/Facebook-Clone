import express from "express";
import User from "../models/user.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;

        // check empty fields
        if (!email || !password) {
            return res.send("Please fill all fields ❌");
        }

        // check user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send("User already exists ⚠️");
        }

        // create new user
        const newUser = new User({ email, password });
        await newUser.save();

        res.send("User created ✅");
    } catch (error) {
        console.log(error);
        res.send("Error in signup ❌");
    }
});


// LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.send("Please fill all fields ❌");
        }

        const user = await User.findOne({ email, password });

        if (user) {
            res.send("Login successful ✅");
        } else {
            res.send("Invalid credentials ❌");
        }
    } catch (error) {
        console.log(error);
        res.send("Error in login ❌");
    }
});

export default router;


