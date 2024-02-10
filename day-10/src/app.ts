import express from "express";

const app: express.Application = express();
const hostname: string = "localhost";
const port: number = 8000;

app.use(express.static(__dirname + "/public"));

function staticFileServer (request: express.Request, response: express.Response) {

    response.sendFile(__dirname + "/index.html")
}

app.get("/", staticFileServer);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
