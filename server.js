import express from "express";
import sample_data from './assets/sample_data.json' assert { type: "json" };
import bodyParser from "body-parser";
import fs from "fs";
import { WebSocketServer } from "ws";


const wss = new WebSocketServer({
    port: 3000
})

wss.on('connection', (ws) => {
    ws.on('close', () => {
        console.log("socket disconnected.")
    })
    
    console.log("new socket connected.")
});

console.log("shat server running on port 3000");
