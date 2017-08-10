function Employee(name){
  this.name=name;
}

var emp1 = new Employee("Jim");

var emp2 = new Employee("Pam");

var emp3 = new Employee("Nave");

Employee.prototype.playPrank = function playPrank(name ){
                      console.log(name+ " played prank");
                      };
Employee.prototype.playPrank("Employee");

emp1.playPrank("emp1");
emp2.playPrank("emp2");
emp3.playPrank("ëmp3");

Employee.prototype.greet= function(){
  console.log("Hello");
}

emp3.greet();// This will only work after above definition of function.
// this dynamic and checked at runtime
