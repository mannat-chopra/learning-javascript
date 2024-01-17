/* You have already completed the email validation program using "||" operator. Now modify the code and rewrite the conditions to validate the email using the "&&" operator.
Additionally, include one more condition that:
a- Email should have at least 3 characters before “@.”
b-If the email is valid then store the value of email in the result variable with a  message.
Expected Input
 xyz@gmail.com is valid
Expected Output
Welcome xyz@gmail.com to our site
Expected Input
 xz@gmail.com is valid
Expected Output
invalid email
Test Cases
Dot should be there before the alphabet
Check for Valid email
Check for invalid email
Check for the size of the email
Check for @ symbol
Check for the length after the dot */



/* *****************SOLUTION********************************* */

function main(email){
    let result;
    // result = prompt("Enter the email address");
    //write your program here to verify the email
   // const email = prompt("Enter the email address");
	const emailLen = email.length;
	const dotIndex = email.lastIndexOf(".");
	const atIndex = email.indexOf("@");
	// const lastIndex = emailLen-1;

	if (atIndex>=3 && dotIndex-atIndex>=4 && emailLen-dotIndex-1 >= 2) {
        result = "Welcome "+ result + " to our site"
        
}else{
    result = "invalid email"
}
    //assign your final ans in result;
    return result;
}