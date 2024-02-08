import Express from "express";
import positiveIntegerHandler from "./positive_integer_handler";
const app: Express.Application = Express()
const hostname: string = "localhost";
const port: number = 8000;


app.get("/positive", (request, response) => {
    positiveIntegerHandler(request, response)
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})