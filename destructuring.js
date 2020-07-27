console.log("======================= Object destructuring ==================");

const obj = {
  firstName: "Afshin",
  lastName: "Teymoori",
  age: 40,
  date: new Date(1973, 11, 23),
};
console.log(obj);

let { firstName, lastName, age } = obj;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log("======================= Array destructuring ==================");
const myArray = ["first!", "second!", "third!", "forth!"];
let [a, b, ...rest] = myArray;
console.log(a);
console.log(b);
console.log(rest);
