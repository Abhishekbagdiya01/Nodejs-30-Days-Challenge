import express from "express";
import rateLimitMiddleware from "./middelware/rate_limit_middelware";
import rateLimit from "express-rate-limit";

const app: express.Application = express();
let port: number = 8000;
let hostname: string = "localhost"

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "429 Too Many Requests status."
})
app.use(limiter)
app.get('/login', (req, res) => {
    res.send(`Login success`)
})
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})