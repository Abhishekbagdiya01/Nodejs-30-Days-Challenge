import Express from "express";
import appLogger from "./middleware/app_logger";
import { connectToDb } from "./config/mongodb_client";

const app: Express.Application = Express();
const hostname: string = "localhost";
const port: number = 8000;
app.use(appLogger)
app.get("/", (request: Express.Request, response: Express.Response) => {
    response.send(`Welcome to 30 days nodejs -- TypeScript Edition`);
})
app.listen(port, hostname, async () => {
    await connectToDb()
    console.log(`Server running at http://${hostname}:${port}/`);
});