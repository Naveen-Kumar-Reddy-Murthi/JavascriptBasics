function Employee(){};
var emp = new Employee();
console.log(emp.test);
emp.prop="Employee";
console.log(emp.prop);
emp.__proto__.parentProp="Parent of Employee";
console.log(emp.parentProp);
console.log(emp.__proto__.__proto__ === Object.prototype);
function foo(){};
Object.prototype.grandParentProp ="Grand Parent";
//above property will be available for every object created in the javascript
var temp = new foo();
console.log(temp.grandParentProp);

//even Object has a prototype. That has a dunderproto which points to null
