const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const Server = require("socket.io");
/* Using this commented code will give us CORS error */
// const io = new Server(server);
const io = Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.get('/',( req, res)=>{
    console.log("Sever is running")
    res.send('<h1>Server is Running!</h1>');
});

io.on('connection', (socket)=>{
    console.log("a user connected");
    socket.on('message', (msg)=>{
        // console.log("message: "+ msg);
        io.emit("message", msg);
    });

    socket.on("disconnect",()=>{
        console.log("user disconnected");
    });
});

server.listen(3000,()=>{
    console.log('listening on *:3000');
});
