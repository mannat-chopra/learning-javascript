/* You are creating a basic age verification system for a website.
Users need to enter their age, and the system should determine if they are eligible to access certain content.
Users must be at least 18 years old to access the restricted content.
Write an if statement in JavaScript to check if the user's age meets the eligibility criteria.

Expected Input
17
Expected Output
"denied"
Expected Input
22
Expected Output
 "granted"
Test Cases
The final output has been printed correctly
a-Check if the user is above 18 to access the restricted content. Store the result in the answer.
b-Check if the user is below 18 and has been denied access for the restricted content 
 */

/* ******************************* SOLUTION ******************************************* */
let age = prompt();
if (age>=18) {
    console.log("granted");
}
else{
    console.log("denied");
}