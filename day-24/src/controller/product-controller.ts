import express from "express";
import mongoose from "mongoose";
import { categorySchema, productSchema } from "../model/product_model";


export class ProductController {

    // create products
    static async createProduct (request: express.Request, response: express.Response) {

        try {
            let productDetails = request.body
            console.log(productDetails.category);

            const category = await mongoose.model("category", categorySchema)
            let catData = await category.create({
                'name': productDetails.category,
            })

            const products = await mongoose.model("products", productSchema)
            let result = await products.create({
                "name": productDetails.name,
                "price": productDetails.price,
                "quantity": productDetails.quantity,
                "category": catData._id

            })
            console.log(`result : ${result}`);



            response.status(200).json({ "message": "Successfully created a new Product!", "data": result, "categoryId": catData._id })

        } catch (error) {
            console.log(error);

        }
    }
    // retrieve products
    static async getAllProducts (request: express.Request, response: express.Response) {
        try {
            const category = await mongoose.model("category", categorySchema)
            const products = await mongoose.model("products", productSchema)
            const data = await products.find({}).populate("category")
            response.status(200).send(data)
        } catch (error) {
            console.log(error);
        }
    }
    // update products
    static async updateProduct (request: express.Request, response: express.Response) {
        try {
            const updatedProduct = request.body
            const productId: any = request.query.id;
            console.log(productId);

            const products = await mongoose.model("products", productSchema)
            const result = await products.updateOne({
                _id: new mongoose.Types.ObjectId(productId)
            }, {
                name: updatedProduct.name,
                price: updatedProduct.price,
                quantity: updatedProduct.quantity
            }
            ).then(() => {
                response.status(200).json({ "message": `The product with the id of ${productId} has been updated.` })
            }).catch((err) => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
        }
    }
    // delete products
    static async deleteProduct (request: express.Request, response: express.Response) {
        try {
            const productId: any = request.query.id;
            const products = await mongoose.model("products", productSchema)
            products.deleteOne(
                { _id: new mongoose.Types.ObjectId(productId) }).then(() => {
                    response.status(200).json({ "message": `The product with the id of ${productId} has been deleted.` })
                })
        } catch (error) {
            console.log(error);
        }
    }
}
