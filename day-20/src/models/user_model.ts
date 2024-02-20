import mongoose from "mongoose";

export const userModel = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: [true, "Email cannot be empty"] },
    age: { type: String }
})

