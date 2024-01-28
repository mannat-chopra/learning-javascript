// The call stack is a crucial concept in JavaScript’s runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program. It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.

var userName = 'Tom'
var userAge = 10
console.log(`userName: ${userName}`);
console.log(`userAge: ${userAge}`);
greeting(userName);
function greeting(name){
    console.log('*********************************');
    var greet = 'I hope you are doing fine.'
    console.log(`hello ${userName}, ${greet}`);
    var currentYear = 2024;
    const year = birthYear(currentYear, userAge);
    console.log('**********************************');
    return `your birth year is ${year}`;
}

function birthYear(year, age){
    console.log('calculating the birth year');
    return year-age;
}
var bYear = greeting(userName);
console.log(bYear);

