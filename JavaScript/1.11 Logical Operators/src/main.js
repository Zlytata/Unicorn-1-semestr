import './style.css'

console.log(`null || 2 || undefined -> ${null || 2 || undefined}`); // 2 protože je 2 první pravdivá hodnota
console.log(`alert(1) || 2 || alert(3) -> ${alert(1) || 2 || alert(3)}`); // 1 a pak 2 protože alert vrací undefined

console.log(`1 && null && 2 -> ${1 && null && 2}`); // null protože je to první nepravdivá hodnota
console.log(`alert(1) && alert(2) -> ${alert(1) && alert(2)}`); // 1 a pak undefined protože alert vrací undefined

console.log(`null || 2 && 3 || 4 -> ${null || 2 && 3 || 4}`); // 3 protože && má přednost před ||

let age = 14;
console.log(`age >= 14 && age <= 90 -> ${age >= 14 && age <= 90}`); // true protože 14 je mezi 14 a 90
console.log(`!(age >= 14) || !(age <= 90) -> ${!(age >= 14) || !(age <= 90)}`); // false protože 14 je mezi 14 a 90

if (-1 || 0) console.log( '-1 || 0 -> first' ); // spustí se protože -1 je pravdivá hodnota
if (-1 && 0) console.log( '-1 && 0 -> second' ); // nespustí se protože 0 je nepravdivá hodnota
if (null || -1 && 1) console.log( 'null || -1 && 1 -> third' ); // spustí se protože -1 && 1 je pravdivá hodnota

const userRole = prompt("Kdo je tam?", '');

if (userRole === 'Admin') {
  const password = prompt('Zadejte heslo:', '');
  if (password === 'TheMaster') {
    alert('Vítejte!');
  }
  else if (password == '' || password === null)
{
    alert('Zrušeno');
  }
    else 
    {
    alert('Špatné heslo');
    }   
} 
else if (userRole == '' || userRole === null) 
{
  alert('Zrušeno');
} else {
  alert("Neznámý uživatel");
}