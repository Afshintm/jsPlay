console.log(globalThis); // globalThis will be known in both Nodejs and browser

// var pressButton = document.getElementById("btnPress");
// console.log(pressButton);
// pressButton.addEventListener(
//   "click",
//   function (event) {
//     console.log(event);
//   },
//   false
// );

sayHello(); // calls the function.
var sayHello = function () {
  console.log("Hello");
};
sayHello(); //calls above function variable
function sayHello() {
  console.log("Hello again");
}
sayHello();

const add = {
  str: "street 1",
  city: "sydney",
};
const { str: s, city: c } = add;
console.log(s);
console.log(c);

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

// function wrap(execute) {
//   var promise = new Promise(function (resolve, reject) {
//     try {
//       resolve(execute());
//     } catch (error) {
//       reject(null);
//     }
//   });
//   promise
//     .then(function (e) {
//       console.log(e);
//     })
//     .catch((reason) => {
//       console.log(reason);
//     });
// }
function wrap(execute) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      try {
        var r = execute();
        resolve(r);
      } catch (error) {
        reject(null);
      }
    }, 100);
  });
  return promise
    .then(function (e) {
      console.log(e);
    })
    .catch((reason) => {
      console.log(reason);
    });
}
var errorExec = wrap(function () {
  throw new Error("Error");
});

// var resultExec = wrap(function () {
//   return "Result";
// });

//console.log(errorExec && errorExec()); // Should output null
//console.log(errorExec && resultExec()); // Should output 'Result';
