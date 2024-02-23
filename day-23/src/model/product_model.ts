import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
    name: { type: String },
});


export const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: "category"
    }
})