/* Create a Javascript function called lastDigit that takes two numbers, num1 and num2, as arguments. The function should determine whether the last digit of both numbers is equal.  If the last digits are equal, the function shuld return true; otherwise, it should return false.
Expected Input
num1 = 29
num2 = 19
Expected Output
true
Expected Output
num1 = 12
num2 = 24
Expected Output
false
Test Cases
Define a function with the name lastDigit
Find out the last digits of both the numbers
Check if the numbers are equal 
If they are equal store true in the answer else store false
*/
/* *************************************SOLUTION************************************** */

function lastDigit(num1, num2){
    let number1 = num1%10;
    let number2 = num2%10;
    if(number1 == number2){
        return true;
    }
    return false;
}