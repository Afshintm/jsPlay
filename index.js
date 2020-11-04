// console.log(global);

// var pressButton = document.getElementById("btnPress");
// console.log(btn);
// pressButton.addEventListener(
//   "click",
//   function (event) {
//     console.log(event);
//   },
//   false
// );

sayHello();
var sayHello = function () {
  console.log("Hello");
};
sayHello();
function sayHello() {
  console.log("Hello again");
}
sayHello();

// const add = {
//   str: "street 1",
//   city: "sydney",
// };
// const { str: s, city: c } = add;
// console.log(s);
// console.log(c);

// function m() {
//   var v = 0;
//   function d() {
//     console.log(v++);
//   }
//   return d;
// }
// var d = m();
// d();
// d();
// d();

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1");
//     resolve("2");
//     resolve("3");
//   }, 1000);
// });
// p.then((data) => {
//   console.log(data);
// });

// var som = "JavaScript1.2";
// var pattern = /(\w+)(\d)\.(\d)/i;
// var o = pattern.test(som);
// console.log(o);

//foo();
//function foo() {}
//var foo = function foo() {};
