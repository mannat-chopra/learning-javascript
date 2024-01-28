// Introduction to function

//Function Decleration
function sum(a, b) {
    return a + b
}

//invoke the function
// console.log(sum(5, 6));



//function expression

const sum2 = function (a, b) { //function without name is anonymous function.
    return a + b;
}

// console.log(sum2(6,5));




// Arrow function

var product = (num1 , num2) => num1 * num2;
console.log(product(2,4));