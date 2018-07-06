const expect = require('expect');


const {generateMessage} = require('./message');

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
