var emp1 = {
};
emp1.firstName = 'Naveen';
emp1.lastName = 'Reddy';
emp1.gender = 'M';
emp1.designation = 'Regional Manager';
var emp2 = {
};
emp2.firstName = 'Michael';
emp2.lastName = 'clark';
emp2.gender = 'M';
emp2.designation = 'Assistant to Regional Manager';
function createEmployeeObject(firstName, firstName, gender, designation) {
  var newObject = {};
  newObject.firstName = firstName;
  newObject.lastName = firstName;
  newObject.gender = gender;
  newObject.designation = designation;
  return newObject;
}

var emp3 = createEmployeeObject("Steve","Jobs", "M", "CEO");