var socket = io();

socket.on('connect',function () {
  console.log('Connected to server');

  socket.emit('createMessage',{
    to:"judy@huanggou.com",
    test:"Hay Jude"
  });
});

socket.on('disconnect',function() {
  console.log('Dissnected from server');
});

socket.on('newMessage', function (message){
  console.log("Received new message",message);
})
