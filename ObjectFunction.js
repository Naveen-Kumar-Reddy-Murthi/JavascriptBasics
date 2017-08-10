/**
object is a global function is javascript
As functions are objects in javascript, object is also a function

*/

console.log(Object);

Object();

console.log("Object function is created by: "+Object.__proto__.constructor);



var simple={};

//another way to create an empty object
var obj= new Object();

console.log(simple);//Object {  }
console.log(obj);//Object {  }

console.log(simple===obj);//false

console.log(obj.__proto__);
console.log(simple.__proto__);
console.log(Object.__proto__);

console.log(simple.__proto__===obj.__proto__);//true
console.log(simple.__proto__===Object.prototype);//true