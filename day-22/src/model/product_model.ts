import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true }
})