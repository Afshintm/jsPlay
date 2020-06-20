console.log('======================= Object destructuring ==================')

const obj = {firstName:'Afshin',lastName:'Teymoori',age:40};

let {firstName, lastName, age} = obj

console.log(obj);

console.log(firstName);
console.log(lastName);
console.log(age);
console.log('======================= Array destructuring ==================')
const myArray = ['first!','second!','third!','forth!'];
let [a,b,...rest] = myArray; 
console.log(a);
console.log(b);
console.log(rest);

