// Execution Context: Everything in JavaScript is wrapped inside Execution Context, which is an abstract concept (can be treated as a container) that holds the whole information about the environment within which the current JavaScript code is being executed.
//Now, an Execution Context has two components and JavaScript code gets executed in two phases.
//Memory Allocation Phase: In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigns undefined as a placeholder.
//Code Execution Phase: In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of execution) of Execution Context. 

var userName = 'Tom'
var userAge = 10
console.log(`userName: ${userName}`);
console.log(`userAge: ${userAge}`);

function greeting(name){
    var greet = 'I hope you are doing fine.'
    console.log(`hello ${userName}, ${greet}`);
    var currentYear = 2024;
    const year = currentYear - userAge;
    return `your birth year is ${year}`;
}
const birthYear = greeting(userName);
console.log(birthYear);