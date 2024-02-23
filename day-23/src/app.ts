import express from "express";
import connectToMongoDb from "./config/mongodb-config";
import { productSchema } from "./model/product_model";
import mongoose from "mongoose";
import { ProductController } from "./controller/product-controller";
const app: express.Application = express()
app.use(express.json())
const hostName: string = "localhost";
const port: number = 8000;

// create products
app.post("/createProduct", ProductController.createProduct)
// retrieve products
app.get("/getAllProducts", ProductController.getAllProducts)
// update products
app.put("/updateProduct", ProductController.updateProduct)
// delete products
app.delete("/deleteProduct", ProductController.deleteProduct)

app.listen(port, hostName, async () => {
    await connectToMongoDb()
    console.log(`Server running at http://${hostName}:${port}/`)
})
