const express = require("express");
const app = express();

var http = require('http');
var server = http.createServer(app);
server.listen(5000,()=>{
    console.log('server lisining on port '+5000)
});

const io = require('socket.io')(server);

io.on("connect", (socket)=>{
    console.log('New user connected');

    socket.on("JoinRoom", (room)=>{
      socket.join(room)
    });

    socket.on("message", (data)=>{
      console.log(data)
      socket.to(data.roomName).emit("message", data);
    });

});