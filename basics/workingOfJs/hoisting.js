/* Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.
Features of Hoisting:
In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
It allows us to call functions before even writing them in our code. 
Note: JavaScript only hoists declarations, not initializations.

JavaScript allocates memory for all variables and functions defined in the program before execution. */


console.log(`userName: ${userName}`);
console.log(`userAge: ${userAge}`);

greeting(userName);
var userName = 'Tom'
var userAge = 10
function greeting(name){
    var greet = 'I hope you are doing fine.'
    console.log(`hello ${userName}, ${greet}`);
    var currentYear = 2024;
    const year = currentYear - userAge;
    return `your birth year is ${year}`;
}

const birthYear = greeting(userName);
console.log(birthYear);


// Hoisting
function codeHoist() {
    a = 10;
    var b = 50;
    }
    codeHoist();
    
    console.log(a); // 10
    // console.log(b); // ReferenceError : b is not defined
    