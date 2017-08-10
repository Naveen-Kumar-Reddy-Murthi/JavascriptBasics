function foo(){};
foo.prototype;

var a = new foo();

//a will have prototype named "__proto__" is also named as "dunder-proto"
//dunder means double underscore

// functions prototype object will have a property called "consturctor"
// which point back to function

var proto= foo.prototype;
console.log(proto.constructor);

console.log(a);
console.log(a.__proto__.constructor);

var b = new a.__proto__.constructor();

console.log(b);

console.log(b.__proto__.constructor);

//these are recommonded to use for development
