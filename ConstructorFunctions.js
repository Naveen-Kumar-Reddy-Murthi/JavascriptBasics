function createEmployeeObject(firstName, firstName, gender, designation) {
//   var newObject = {};
  this.firstName = firstName;
  this.lastName = firstName;
  this.gender = gender;
  this.designation = designation;
//   return newObject;
}

var emp3 = new createEmployeeObject("Michael","Phelps", "M", "Swimmer");
// when using new keyword, we are using constructors in javascript
// So we can ignore creating and returning of object in the function
// hence both are commented
// new keyword switches the function to construction mode
//
