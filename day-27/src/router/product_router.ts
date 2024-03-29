import express from 'express'
import { ProductController } from '../controller/product-controller'

const productRouter = express.Router()
// create products
productRouter.post("/createProduct", ProductController.createProduct)
// retrieve products
productRouter.get("/getAllProducts", ProductController.getAllProducts)
// get product statistics
productRouter.get("/getProductStatistics", ProductController.getProductStatistics)
// update products
productRouter.put("/updateProduct", ProductController.updateProduct)
// delete products
productRouter.delete("/deleteProduct", ProductController.deleteProduct)

export default productRouter