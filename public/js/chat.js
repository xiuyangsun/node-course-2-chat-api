var socket = io();

function scrollToBottom (){
  //selecters
  var messages = jQuery('#messages');
  var newMessage = messages.children('li:last-child');
  //hights
  var clientHeight = messages.prop('clientHeight');
  var scrollTop = messages.prop('scrollTop');
  var scrollHeight = messages.prop('scrollHeight');
  var newMessageHeight = newMessage.innerHeight();
  var lastMessageHeight = newMessage.prev().innerHeight();

  if(clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight){
    messages.scrollTop(scrollHeight);
  }
};

socket.on('connect',function () {
  var params = jQuery.deparam(window.location.search);

  socket.emit('join',params, function (err){
    if(err){
      alert(err);
      window.location.href='/';
    }else{
      console.log('No Err');
    }
  });
});

socket.on('disconnect',function() {
  console.log('Dissnected from server');
});

socket.on('updateUserList',function(users){
  var ol = jQuery('<ol></ol>');

  users.forEach(function(user){
    ol.append(jQuery('<li></li>').text(user));
  });

  jQuery('#users').html(ol);
});

socket.on('newMessage', function (message){
  var formatedTime = moment(message.createAt).format('H:mm a');
  var template = jQuery('#message-template').html();
  var html = Mustache.render(template,{
    text:message.text,
    from:message.from,
    createAt:formatedTime
  });

  jQuery('#messages').append(html);
  scrollToBottom();
});

socket.on('newLocationMessage',function(message){
  var formatedTime = moment(message.createAt).format('H:mm a');
  var template = jQuery('#locationMessage-template').html();
  var html = Mustache.render(template,{
    from:message.from,
    url:message.url,
    createAt:formatedTime
  });

  jQuery('#messages').append(html);
  scrollToBottom();
});

jQuery('#message-form').on('submit',function (e){
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');

  socket.emit('createMessage',{
    text:messageTextbox.val()
  },function(){
    messageTextbox.val('');
  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click',function(){
  if(!navigator.geolocation){
    return alert('Geolocation not supported by your Browser');
  }

  locationButton.attr('disabled','disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage',{
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    });
  },function(){
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location.');
  });
});
