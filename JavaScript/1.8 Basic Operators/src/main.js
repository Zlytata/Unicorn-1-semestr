import './style.css'

let a = 1, b = 1;

let c = a++; // postfix vrací původní hodnotu a zvyšuje hodnotu o 1
let d = ++b; // prefix zvyšuje hodnotu o 1 a vrací novou hodnotu

console.log(c);
console.log(d);

a = 2;
let x = 1 + (a *= 2); // stejné jako a = a * 2

console.log(a);
console.log(x);

console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(Boolean(true + false)); //true
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("     -9     " + 5); // "     -9     5"
console.log("    -9     " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2

let k = prompt("Zadej první číslo", 1);
let l = prompt("Zadej druhé číslo", 2);

console.log(+k + +l); // použijeme unární operátor + pro převod na číslo

console.log(10 / 0); // Infinity

console.log(~5); // -6 protože ~ je bitový NOT a invertuje všechny bity
console.log(5 ^ 5); // 0 protože ^ je bitový XOR a porovnává bity
console.log(5 & 1); // 1 protože & je bitový AND a porovnává bity
console.log(1 | 5); // 5 protože | je bitový OR a porovnává bity
