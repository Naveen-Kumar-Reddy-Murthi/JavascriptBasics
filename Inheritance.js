function Employee(name){this.name=name;};
Employee.prototype.getName=function(){return this.name;};
// Object.prototype.getName=function(){return this.name;};// but this adds getName to each object
var emp1 = new Employee("Jim");
console.log(emp1.getName());
function Manager(name,dept){this.name=name;this.dept=dept}
Manager.prototype.getDept= function(){return this.dept;};
var mgr = new Manager("Michael","Sales");

mgr.__proto__.__proto__=Employee.prototype

console.log(mgr.getDept());

console.log(mgr.getName());

Employee.prototype.getSalary= function(){
  return 100;
}

console.log(emp1.getSalary());
console.log(mgr.getSalary());



