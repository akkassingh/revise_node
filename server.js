import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
    port: 3000
})

let messages = [];

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(message.toString())
        messages.push(message.toString());
        if(message.toString() == "exit")
        {
            ws.close()
        } else {
            wss.clients.forEach((client) => client.send(message.toString())
        );
        }
    });
    ws.on('close', () => {
        console.log("socket disconnected.")
    })
    
    console.log("new socket connected.")
    ws.send("welcome to live chat!");
    if(messages.length){
        ws.send("chat currently in session");
        messages.forEach(message => ws.send(message.toString()))
    }
});

console.log("Chat Server running on port 3000");
