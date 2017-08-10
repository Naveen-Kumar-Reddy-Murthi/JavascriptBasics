var bicycle =createBicycle(50,20,40);
var bicycle1 =createBicycle(20,5,1);

function createBicycle(cadence, speed, gear){
  var newBicycle ={};
  newBicycle.cadence=cadence;
  newBicycle.speed=speed;
  newBicycle.gear=gear;
  return newBicycle;
}

//constructor function

// function bicycleConstructor(cadence, speed, gear){
//constructor based function names should start with capital letter by convention
function Bicycle(cadence, speed, gear){  
  this.cadence=cadence;
  this.speed=speed;
  this.gear=gear;
  
}

var bicycle3 = new Bicycle(36,24,36);
