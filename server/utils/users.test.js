const expect = require('expect');

const {Users} = require('./users');

describe('Users',()=>{
  var users;
  beforeEach(()=>{
    users = new Users();
    users.users= [{
      id:'1',
      name:'Bobby',
      room:'Node course'
    },{
      id:'2',
      name:'Judy',
      room:'React course'
    },{
      id:'3',
      name:'Hala',
      room:'Node course'
    }];
  });
  it('should add new user',()=>{
    var users = new Users();
    var user = {
      id:123,
      name:'Bobby',
      room:'Happy world'
    };

    var resUser = users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user',()=>{
    var id = '1';
    var user = users.removeUser(id);
    expect(user.id).toBe(id);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user',()=>{
    var id = '5';
    var user = users.removeUser(id);
    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find a user',()=>{
    var id = '2';
    var user = users.getUser(id);
    expect(user.id).toBe(id);
  });

  it('should not find a user',()=>{
    var id = '8';
    var user = users.getUser(id);
    expect(user).toBeFalsy();
  });

  it('should return names for Node course',()=>{
    var userList = users.getUserList('Node course');
    expect(userList).toEqual(['Bobby','Hala']);
  });

  it('should return names for React course',()=>{
    var userList = users.getUserList('React course');
    expect(userList).toEqual(['Judy']);
  });
});
