import { jest } from "@jest/globals";
import request from "supertest";
import express from "express";

// Mock User model so tests don't need MongoDB
jest.unstable_mockModule("../models/user.js", () => ({
    default: {
        findOne: jest.fn()
    }
}));

const { default: userRoutes } = await import("../routes/userRoutes.js");
const { default: User } = await import("../models/user.js");

const app = express();

app.use(express.json());
app.use("/api", userRoutes);

describe("User Signup API", () => {

    // Test 1
    test("should reject signup when fields are empty", async () => {
        const response = await request(app)
            .post("/api/signup")
            .send({
                email: "",
                password: ""
            });

        expect(response.statusCode).toBe(200);
        // expect(response.text).toContain("Please fill all fields");
        expect(response.text).toContain("Wrong message");
    });

    // Test 2
    test("should reject signup when password is missing", async () => {
        const response = await request(app)
            .post("/api/signup")
            .send({
                email: "test@example.com",
                password: ""
            });

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("Please fill all fields");
    });

    // Test 3
    test("should reject login with invalid credentials", async () => {

        // Fake database response: user not found
        User.findOne.mockResolvedValue(null);

        const response = await request(app)
            .post("/api/login")
            .send({
                email: "wrong@example.com",
                password: "wrongpassword"
            });

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("Invalid credentials");
    });

    // Test 4
    test("should reject login when fields are empty", async () => {
        const response = await request(app)
            .post("/api/login")
            .send({
                email: "",
                password: ""
            });

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("Please fill all fields");
    });

});