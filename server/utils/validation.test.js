const expect = require('expect');

const {isRealString} = require('./validation');

describe('Validate inpu string',()=>{
  it('should reject non-string values',()=>{
    var str = 25;
    expect(isRealString(str)).toBe(false);
  });

  it('should reject with onlu spaces',()=>{
    var str = '         ';
    expect(isRealString(str)).toBe(false);
  });

  it('should allow string with no-space characters',()=>{
    var str = 's';
    expect(isRealString(str)).toBe(true);
  });
});
