import express from "express";
import appLogger from "./middleware/app_logger";
import { userModel } from "./models/user_model";
import { connectToDb } from "./config/mongodb_client";
import mongoose, { Model } from "mongoose";
const app: express.Application = express();
const hostname: string = "localhost";
const port: number = 8000;
app.use(appLogger)
app.use(express.json());
app.get("/", (request: express.Request, response: express.Response) => {
    response.send(`Welcome to 30 days nodejs -- TypeScript Edition`);
})

const user = mongoose.model("User", userModel)

async function getAllUsers (request: express.Request, response: express.Response) {
    try {
        const result = await user.find({})
        console.log(result);
        response.status(200).json(`Result : ${result}`)
    } catch (error) {
        response.status(401).json("Error : " + error)
    }
}
app.get("/users", (request: express.Request, response: express.Response) => {
    getAllUsers(request, response)
})

app.listen(port, hostname, async () => {
    await connectToDb()
    console.log(`Server running at http://${hostname}:${port}/`);
});