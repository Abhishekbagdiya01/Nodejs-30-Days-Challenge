import mongoose from "mongoose";
import { productSchema } from "../model/product_model";

async function connectToMongoDb () {
    try {
        const url: string = "mongodb://localhost:27017/30-days-node-challenge"
        await mongoose.connect(url).then(() => {
            console.log("MongoDB Connected");
            createProductNameIndex()
        })
    } catch (error) {
        console.log(`Something went wrong Error : ${error}`);
    }
}

export default connectToMongoDb


export async function createProductNameIndex () {
    const products = await mongoose.model("products", productSchema)
    const result = await products.collection.createIndex({
        name: 1
    }).then(() => {
        console.log("index created");
    })
}