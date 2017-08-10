function Bicycle(cadence, speed, gear, tirePressure){
  this.cadence =cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  this.inflateTires= function(){
    this.tirePressure+=3;
  }
}

var bicycle1 = new Bicycle(100,20,4,25);
// bicycle1.inflateTires();

var bicycle2 = new Bicycle(200,20,4,30);
// bicycle1.inflateTires(); 

function Mechanic(name){
  this.name= name;
}

var mike= new Mechanic("Mike");
mike.inflateTires  = bicycle1.inflateTires;
mike.inflateTires();

mike.inflateTires.call(bicycle1);
//call is a property which in turn a function in each function object
//in javascript
// call function calls the said method on given object.
// call takes an object as parameter.
// using call we can pass the object 