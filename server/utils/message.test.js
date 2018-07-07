const expect = require('expect');


const {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate the correcte message object',()=>{
    var from  = "Bobby";
    var text = "HAHA, correct!"
    var message = generateMessage(from,text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createAt).toBe('number');
  });
});

describe('generateLocationMessage',()=>{
  it('should generate correct location objext',()=>{
    var from = 'Judy';
    var latitude = -71.1;
    var longitude = 22.5;
    var locationMessage = generateLocationMessage(from,latitude,longitude);

    expect(locationMessage.from).toBe('Judy');
    expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);

  });
});
