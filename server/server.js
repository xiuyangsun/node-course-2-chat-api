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
    from:"Andrew",
    text:"Welcome to the chat room",
    createAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage',{
    from:"Admin",
    text:"New user just joint",
    createAt: new Date().getTime()
  });

  socket.on('createMessage',(message)=>{
    console.log("Created message",message);
    io.emit('newMessage',{
      from:message.from,
      text:message.text,
      createAt:new Date().getTime()
    });


    // socket.broadcast.emit('newMessage',{
    //   from:message.from,
    //   text:message.text,
    //   createAt:new Date().getTime()
    // });

  });

  socket.on('disconnect',(socket)=>{
    console.log('User is disconected');
  });
});

server.listen(port,()=>{
  console.log(`Starting on port ${port}.`);
});
