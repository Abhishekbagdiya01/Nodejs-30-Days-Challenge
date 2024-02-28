import express from "express";
import connectToMongoDb from "./config/mongodb-config";
import productRouter from "./router/product_router";
import authenticateAndAuthorize from "./middleware/auth_middleware";
const app: express.Application = express()
app.use(express.json())
const hostName: string = "localhost";
const port: number = 8000;
app.use(authenticateAndAuthorize(["admin", "user"]))
app.use("/products", productRouter)



app.listen(port, hostName, async () => {
    await connectToMongoDb()
    console.log(`Server running at http://${hostName}:${port}/`)
})
