/* Write a program to check a year is a leap year or not. If it is a leap year store true in the answer else store false.
Check the following conditions to check if a given year is a leap year or not.
1- Condition 1: If a year is divisible by 4, it is a leap year.
2-Condition 2: If a year is divisible by 100, it is not a leap year.
3- Condition3 : if a year is divisible by 400, it is a leap year.
 Expected Input
2013
Expected Output
false
Expected Input
2004
Expected Output
true
Expected Input
2100
Expected Output
false
Test Cases
a-Check if a year is a leap year and store the boolean value in the answer
b-Check if a year is not a leap year and store the boolean value in the answer
c-Check if a year is divided by 4 but is not a leap year and store the boolean value in the answer */

/* ******************************************solution************* */
function leapYear(year) {
    let answer;
   //Write your code here
   if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    answer = true;
} else {
    answer = false;
}
return answer
}
// console.log(leapYear(2016));