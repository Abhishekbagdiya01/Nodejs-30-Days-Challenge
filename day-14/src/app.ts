import Express from "express";
import { cachingMiddleware } from "./middelware/cache_middelware";

const app: Express.Application = Express()
const hostname: string = "localhost";
const port: number = 8000;

app.use(cachingMiddleware)
app.get("/", (request, response) => {
    console.log("hello world");

    response.send(
        "Hello World! This is a simple HTTP server that responds to GET requests at http://"
    )
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})