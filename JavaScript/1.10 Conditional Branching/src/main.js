import './style.css'

if("0") // "0" is truthy
  console.log("0 is truthy");

  let answer = prompt("Jaký je oficiální název JavaScriptu?", ""); 
  if(answer === "ECMAScript") 
    console.log("Správně!");
  else 
    console.log("Špatně!");

  let number = prompt("Zadej číslo", "");

  const num = +number > 1 ? 1 : 
              +number < -1 ? -1 : 
              0;

  console.log(num);

  /*
  Předloha pro ternarní výraz
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
  */

const a = 1;
const b = 2;
let result = a + b < 4 ? 'Below' : 'Over';  
console.log(result);

/*
Předloha pro ternární výraz
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

const login = prompt("Zadej svůj login", "");

let message = login == 'Employee' ? 'Hello' :
              login == 'Director' ? 'Greetings' :
              login == '' ? 'No login' :
              '';

console.log(message);