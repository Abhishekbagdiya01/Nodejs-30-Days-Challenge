import express from "express";
import WebSocket from 'ws';
import http from "http"
const app: express.Application = express();
let port: number = 8000;
let hostname: string = "localhost"

const server = http.createServer(app)

const wss = new WebSocket.Server({ server: server });
wss.on('connection', (ws: WebSocket) => {
    console.log('New client connected');

    ws.on('message', (message: string) => {
        console.log(`Received message: ${message}`);
        ws.send(`Server received your message: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

app.get("/websocket", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})