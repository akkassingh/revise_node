import {createServer} from 'http';
import { Server } from 'socket.io';

const server = createServer().listen(3000);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log(`${io.engine.clientsCount} connections`);
    socket.on('chat', (message) => {
        console.log(`${socket.id}: ${message}`);
        io.sockets.emit("message", message, socket.id);
    });
    socket.on("disconnect", () => {
        console.log("disconnected", socket.id)
    })
})

console.log("socket sever running on port 3000");