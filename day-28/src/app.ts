import http from "http"
import express from "express"
import socketio from "socket.io"
const hostName: string = "localhost"
const port: number = 8000
const app: express.Application = express()
const server = http.createServer(app)

const io = new socketio.Server(server)
let count = 0;
io.on("connection", (socket) => {
    console.log("new user connected ", socket.id);
    io.emit("counterUpdate", count)
    io.on("clicked", (count) => {
        count++;
        io.emit("counterUpdate", count)
        socket.broadcast.emit("counterUpdate", count)

        console.log("counter : ", count);

    })
})
app.use(express.static("public"))
app.get("/", (req, res) => {
    res.sendFile("/public/index.html")
})

server.listen(
    port, hostName, () => {
        console.log(`Server running at http://${hostName}:${port}/`);

    }
)