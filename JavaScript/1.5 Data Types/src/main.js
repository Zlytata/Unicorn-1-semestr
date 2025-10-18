import './style.css'

const infinity = 1 / 0 ; // Infinitys

const userName = "Jakub"

const NaN = "Nemůžeš dělit string" / 0; //Nelze dělit string nulou, vrátí NaN

const bigInt = 1234567890123456789012345678901234567890n; // Velké celé číslo, int je pouye 64bit

let string = `Ahoj, já jsem ${userName}.`; // Backticks pro vícenásobné řetězce

let age = null; // Null je záměrná absence hodnoty 

alert(age);

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 12n);
console.log(typeof true);
console.log(typeof "Ahoj");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);

let name = "Ilya";

console.log(`Hello ${1}`);
console.log(`Hello ${"name"}`);
console.log(`Hello ${name}`);