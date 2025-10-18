import './style.css'

// Task No. 1

const age = +prompt('How old are you?', 18);

console.log("Task No. 1");
console.log(getAge(age));

function getAge(age)
{
    if(age > 18)
        return `You are adult one.`

    return 'Did parents allow you?';
}

// Task No. 2
console.log("Task No. 2");
console.log(`Using Nullish Coalescing Operator: ${checkAgeWithNullishCoalescing(age)}`);
console.log(`Using Short-Circuiting Operator: ${checkAgeWithShortCircuiting(age)}`);

function checkAgeWithNullishCoalescing(age){
    return age > 18 ? "You are adult one." : "Did parents allow you?";
}
function checkAgeWithShortCircuiting(age){
    return (age > 18 && "You are adult one.") || "Did parents allow you?";
}

//Task No. 3

console.log("Task No. 3");
console.log(`Minimum of 2 and 5 is ${getMin(2, 5)}`);
console.log(`Minimum of 3 and -1 is ${getMin(3, -1)}`);
console.log(`Minimum of 1 and 1 is ${getMin(1, 1)}`);

function getMin(a, b){
    return a < b ? a : b;
}

//Task No. 4

console.log("Task No. 4");
console.log(`3 raised to the power of 2 is ${getPow(3, 2)}`);
console.log(`3 raised to the power of 3 is ${getPow(3, 3)}`);
console.log(`1 raised to the power of 100 is ${getPow(1, 100)}`);

function getPow(x, n){
    if(n < 1)
        return `Power ${n} is not supported, use a natural number`;

    return x ** n;
}