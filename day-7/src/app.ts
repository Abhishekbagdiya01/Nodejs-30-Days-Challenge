import Express from "express";
import appLogger from "./middleware/app_logger";

const app: Express.Application = Express();
const hostname: string = "localhost";
const port: number = 8000;
app.use(appLogger)
app.get("/", (request: Express.Request, response: Express.Response) => {
    response.send(`Welcome to 30 days nodejs -- TypeScript Edition`);
})
app.get("/greet", (request: Express.Request, response: Express.Response) => {
    greetHandler(request, response);
});

function greetHandler (request: Express.Request, response: Express.Response) {
    let name = request.query.name;
    if (name != "") {
        response.send(`Hello, ${name}!`);
    } else {
        response.send(`Hello, Guest!`);
    }
}
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});