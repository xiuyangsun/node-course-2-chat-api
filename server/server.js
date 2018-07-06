const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New user connected');

  socket.emit('newMessage',{
    from:"Bobby@server.com",
    text:"Hey, this is Bobby",
    created:12345
  });

  socket.on('createMessage',(newMessage)=>{
    console.log("Created message",newMessage)
  });

  socket.on('disconnect',(socket)=>{
    console.log('User is disconected');
  });
});

server.listen(port,()=>{
  console.log(`Starting on port ${port}.`);
});
