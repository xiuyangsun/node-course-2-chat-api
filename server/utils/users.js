[{
  id:'',
  name:'',
  room:''
}]

//addUser(id,name,room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users{
  constructor () {
    this.users = [];
  }
  addUser (id,name,room){
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }
  removeUser(id){
    var user = this.users.filter((user)=> user.id ===id)[0];
    if(user){
      this.users = this.users.filter((user)=>user.id !== id);
    }
    return user;
  }
  getUser(id){
    var user = this.users.filter((user)=> user.id ===id)[0];
    return user;
  }
  getUserList(room){
    var users=this.users.filter((user)=> user.room === room);
    var namesArray = users.map((user)=> user.name);

    return namesArray;
  }
}

module.exports = {Users};


//ES6 Class Syntax
// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription(){
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }
//
// var me = new Person('bobby',25);
// console.log(me.getUserDescription());
