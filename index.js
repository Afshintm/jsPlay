
let a = 10 ;
const b = 30;
console.log(a);
var pressButton = document.getElementById("btnPress");
pressButton.onclick =function () {alert("thanks for clicking me");};
pressButton.addEventListener("click",function(event){console.log(event);},false);
// var f = function(){
//     console.log('it\'s clicked...');
// }
// function f1(){
//     console.log('f1');
// }