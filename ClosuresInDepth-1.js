var i = 0;
// for(i=0;i<10;i++){
//   console.log(i);
// }
var print = function (num) {
  console.log(i);
};
for (i = 0; i < 10; i++) {
  //console.log("iteration value:"+i);
  //setTimeout(print(i), 1000);
  
//   (function(){
//     setTimeout(print(i), 1000);
//   })();
  
//   (function(){
//      var curValueOfI=i;
//     setTimeout(function(){console.log(curValueOfI);}, 1000);
//   })();
  
   (function(curValueOfI){
     
    setTimeout(function(){console.log(curValueOfI);}, 1000);
  })(i);
  
}
