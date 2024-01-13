/* Create a simple online shopping discount calculator.
The program should take the input for the original price of a product and the discount percentage.
It should then calculate and display the final discounted price.
 */
// Input:-
/*Original Value = "50.75"
Discount Percentage = "15.5"
Output:-
Discounted Price = 42.88375
Test Cases:-
The final output should be printed correctly.
Firstly convert the string value of "originalValue" and "discountPercentage"
 into numeral value by using parseFloat. 
Then apply the formula for calculating the discount amount. 
After calculating the discounted amount value, deduct this amount from "originalValue" numeral value.*/


/* ********************* Solution ************************************* */
function shoppingDiscountCalculator(originalValue,discountPercentage){
    let answer;
    let orignalvalue = parseFloat(originalValue);
    let discountpercentage = parseFloat(discountPercentage);
    discountpercentage = (discountPercentage*originalValue)/100;
    answer = orignalvalue - discountpercentage;
return answer
    }
    // console.log(shoppingDiscountCalculator("50.75","15.5"))
