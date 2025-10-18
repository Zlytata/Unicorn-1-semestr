import './style.css'

let i = 3;
let j = "";

while (i) {
j += `Number is: ${i}\n`;
i--;
}
console.log(j);

i = 0;
while (++i < 5) {
console.log(i);
}

i = 0;
while (i++ < 5) {
console.log(i);
}

for (let i = 0; i < 5; i++) {
console.log( i );
}

for (let i = 0; i < 5; ++i) {
console.log( i );
}

for(let i = 2; i <= 10; i++){
  console.log(`${i} % 2 == 0) -> ${i % 2 == 0}`);
}

i = 0;
while(i < 3){
  console.log(`number ${i}!`);
  i++;
}

/*
let answer;

do {
  answer = prompt("Napiš větší číslo než 100?", 0);
} 
while (answer <= 100 && answer);  
*/

let stringBuilder = "";

const n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...
  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  stringBuilder += `${i} `; // a prime
}

console.log(stringBuilder);