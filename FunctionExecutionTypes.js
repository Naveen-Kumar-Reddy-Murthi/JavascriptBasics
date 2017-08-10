function foo(){
  console.log("test");
}

foo(); // Method-1

var obj= {};

obj.foo = function(){
  console.log("Hello");
};
obj.foo(); // Method-2
new foo(); // Method-3

//execution context


