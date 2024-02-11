import express from "express";
import authenticationMiddleware from "./middelware/auth_middelware";
const app: express.Application = express();
let port: number = 8000;
let hostname: string = "localhost"


app.use(authenticationMiddleware)
app.get('/login', (req, res) => {
    res.send(`Login success`)
})
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})