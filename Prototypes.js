/*

In javascript, every object created using new keyword will have an object 
called prototype

whenever a function is created in javascript, javascript engine creates
two objects. One is function object and prototype object.
Prototype object is added inside function object as a property named "prototype"
And it is referred to prototype object created

*/


function foo(){};

var obj = new foo();
// this statement will create prototype object named __proto__
// by default foo(function object) will have an object called prototype
// Both these two objects are same. Changes to one will reflect to another.
obj.__proto__.naveen="naveen";
//"naveen"
foo.prototype.naveen;
//"naveen"
foo.prototype.naveen="reddy";
//"reddy"
obj.__proto__.naveen;
//"reddy"
obj.__proto__===foo.prototype;
// true

//all the property look ups in objects will be delegated to __proto__ object
//if that property doesn't exist in that object.

//prototype can be used to define functions in a function.
//If multiple objects are created from that particular function,
// all the instances will have access to that particular function
// defined in the __proto__ object.


        