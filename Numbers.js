const  a = 8;
const b = 0b1000 ; // binary
const c = 0x0A; // hexadecimal 
console.log(a===b);
console.log(a===(c-2));

let billion = 1_000_000_000 ; // Underscore as a thousands separator. 
let bytes = 0x89_AB_CD_EF ; // As a bytes separator. 

let bits = 0b0001_1101_0111 ; // As a nibble separator.   
let fraction = 0.123_456_789; // Works in the fractional part, too.

console.log('Billion 1_000_000_000= '+ billion);
console.log('bytes 0x89_AB_CD_EF = '+ bytes);
console.log('bits 0b0001_1101_0111 = '+ bits);
console.log('Fraction 0.123_456_789 = '+ fraction);

console.log('Number.POSITIVE_INFINITY: '+ Number.POSITIVE_INFINITY);

console.log(Math.sqrt(9));
console.log(Math.pow(16,1/4));
console.log(Math.sin(60));
console.log(Math.cos(30));

let n = Number.NaN;
console.log('isNaN(n) is '+ isNaN(n));
console.log('isFinite(Number.POSITIVE_INFINITY) is '+isFinite(Number.POSITIVE_INFINITY));

let bigInt = 1237623546752745237654n;
let str = 1+ "0".repeat(100);
let g = BigInt(str);
console.log(g);
let binaryBigInt = 0b1010000010101010111111111111001111110101001n;
console.log(binaryBigInt);

let hexaDecimalBigInt = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFn;
console.log(hexaDecimalBigInt);