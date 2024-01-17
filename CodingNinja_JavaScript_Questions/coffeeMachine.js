/* Create a program that takes a customer's coffee order as input, converts the input to lowercase, and ises a switch statement to handle different coddee types. The program should calculate the proce based on the selected coddee type and store the result in a variable names "answer."
The coffee types and their price are as follows:
Regular: $ 2.50
Latte: $3.50
Cappuccino: $4.00
Espresso: $2.50
Expected Input
regular
Expected Output
$2.50
Expected Input
ESPRESSO
Expected Output
$2.50
Test Cases
a-You should convert the string to lowercase
b-Use a switch statement to store the price of the selected coffee in answer */

/* ***************SOLUTION**************************** */

function coffeeMachine(coffeeType) {
    let answer;
    //Write your code here
    let lowercoffeeType = coffeeType.toLowerCase();
    switch (lowercoffeeType) {
        case 'regular':
            answer = "$2.50";
            break;
        case 'latte':
            answer = "$3.50";
            break;
        case 'cappuccino':
            answer ="$4.00";
            break
        case 'espresso':
            answer = "$2.50"
            break;
        default:
            break;
    }
return answer;
}
// console.log(coffeeMachine("latte"));
