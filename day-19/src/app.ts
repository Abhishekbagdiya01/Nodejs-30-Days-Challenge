import express from "express";
import appLogger from "./middleware/app_logger";
import { userModel } from "./models/user_model";
import { connectToDb } from "./config/mongodb_client";
import mongoose, { Model } from "mongoose";
import { isEmail } from "validator";
const app: express.Application = express();
const hostname: string = "localhost";
const port: number = 8000;
app.use(appLogger)
app.use(express.json());
app.get("/", (request: express.Request, response: express.Response) => {
    response.send(`Welcome to 30 days nodejs -- TypeScript Edition`);
})

const user = mongoose.model("User", userModel)


async function addUserToDatabase (request: express.Request, response: express.Response, user: any) {
    let userInfo = request.body

    if (!isEmail(userInfo.email!)) {
        response.status(401).json({ "error": " Invalid email " })
    } else {
        let result = await user.create({
            username: userInfo.username!,
            email: userInfo.email!
        })
        console.log("result : ", result);

        response.status(200).json({
            "message": `Successfully added new user :  ${result.username}`,
        })
    }

}
app.post("/login", (request: express.Request, response: express.Response) => {
    addUserToDatabase(request, response, user)
})
app.listen(port, hostname, async () => {
    await connectToDb()
    console.log(`Server running at http://${hostname}:${port}/`);
});