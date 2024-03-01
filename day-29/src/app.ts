import express, { json } from "express"
import errorHandler from "./middlewares/error_middleware";
const app: express.Application = express();
const hostname: string = "localhost";
const port: number = 8000
app.use(json());
app.get("/", (request: express.Request, response: express.Response, next: express.NextFunction) => {


    const err = new Error(
        `Method not supported on this endpoint.`
    )

    next(err)
})
app.use(errorHandler)
app.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
})