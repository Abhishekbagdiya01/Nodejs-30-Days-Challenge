
import mongoose from "mongoose";

export async function connectToDb () {
    try {
        await mongoose.connect("mongodb://localhost:27017/30-days-node-challenge").then(() => {
            console.log("MongoDB Connected");
        })
    } catch (error) {
        console.log("Something went wrong while connecting to the database : ", error);

    }
}