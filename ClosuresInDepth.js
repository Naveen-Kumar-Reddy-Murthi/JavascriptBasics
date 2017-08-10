function createPerson()
{
  var firstName = "Naveen";
  var lastName  = "Reddy";

  var person = {
  
  "getFirstName": function(){
                    return firstName;
                  },    
  "getLastName" : function(){
                     return lastName;
  },
   "setFirstName" : function(name){
                   firstName = name;
   },
   "setLastName" : function(name){
                   lastName = name;
   }
}

return person;
}

var person = createPerson();
console.log(person.getFirstName());
console.log(person.getLastName());
person.setFirstName("foo");
person.setLastName("loo");
console.log(person.getFirstName());
console.log(person.getLastName());



