//Jan 1th 1970 00:00:00

const moment = require('moment');


// var date = moment();
// date.add(1,'years').subtract(1,'months');
// console.log(date.format('MMM Do, YYYY'));


//10:35 am

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);


var createAt = 1234;
var time = moment(createAt);
time.subtract(15,'hours');
console.log(time.format('H:mm a'));
