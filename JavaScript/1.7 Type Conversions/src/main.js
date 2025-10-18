import './style.css'

let value = true;
console.log(typeof value); // boolean

value = String(value); // převod na řetězec "true"
console.log(typeof value); // string

console.log("6" / "2"); // 3

let str = "123";
console.log(typeof str); // string

str = Number(str); // převod na číslo 123
console.log(typeof str); // number

let age = Number("něco jiného než číslo"); // NaN (Chyba převodu)
console.log(age);

let number = "   42   ";
console.log(Number(number)); // 42
number = "42Z"
console.log(Number(number)); // NaN (Chyba převodu)
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("něco")); // true