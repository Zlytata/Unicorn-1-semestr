import './style.css'

//sayHi('John'); ReferenceError: sayHi is not defined
sayBye('Barbie'); //Works fine

const sayHi = function(name){
    console.log('Hello ' + name)
}

sayHi('John');

function sayBye(name){
    console.log('Bye ' + name)
}

sayBye('Barbie');

const aggreement = confirm('Do you agree?');

/*if(aggreement)
    {
    function showOk(){
        console.log('You agreed.');
    }
    }else{
    function showCancel(){
        console.log('You canceled the execution.');
    }
}

showOk(); ReferenceError: showOk is not defined */

let answer = null;

if(aggreement)
    {
    answer = function(){
        console.log('You agreed.');
    }
    }else{
    answer = function(){
        console.log('You canceled the execution.');
    }
}

answer(); //Works fine

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}

ask(
    'Do you agree?',
    function(){ console.log('You agreed.'); },
    function(){ console.log('You canceled the execution.'); }
);