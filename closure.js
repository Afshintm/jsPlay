var initial = 1;
function addTen() {
  var a = initial + 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
// at the time of calling test initial is one
var t = addTen();
//we change the initial but it does not make any difference in the answer because of clouser.
//When we call t() the result is 11 and not 22;
initial = 12;
t();
initial++;
t();
//inner function is run with the scope chain when it was defined. And not the scope chain when it was called.
