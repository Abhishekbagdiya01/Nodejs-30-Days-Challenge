import express from "express";
import mongoose from "mongoose";
import { productSchema } from "../model/product_model";


export class ProductController {

    // create products
    static async createProduct (request: express.Request, response: express.Response) {

        try {
            let productDetails = request.body
            const products = await mongoose.model("products", productSchema)
            let result = await products.create({
                "name": productDetails.name,
                "price": productDetails.price,
                "quantity": productDetails.quantity,

            })
            console.log(`result : ${result._id}`);
            response.status(200).json({ "message": "Successfully created a new Product!", "data": result })

        } catch (error) {
            console.log(error);

        }
    }
    // retrieve products
    static async getAllProducts (request: express.Request, response: express.Response) {
        try {

            const products = await mongoose.model("products", productSchema)
            const data = await products.find({})
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
