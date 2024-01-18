/* Create a Compount Interest program that calculates the total amount accumulated after a certain period based on the following attributes:
a. principalAmount: The principal value deposited
b. anualInterest Rate: Interest rate per year
c. number Of Years: Period for which interest has to be given.
Use the following Formulas when computing the values:
a. Interest Amount after 1 Year = (Principal Amount X Anuual interest * 1)/100
b. Interest Amount after n years = (Principal Amount X Annual interest rate X n)/100
c. Updated Principal Amount after each year = Previous Year Principal amount + previous Year Interest Amount
Sample Input
principalAmount : 500$
annualInterestRate : 8%
numberOfYears  : 5
Sample Output
734.66
Test Cases
 a-You need to calculate the simple interest on the given output
 b- Store the new Principal amount in answer
 */

 /* **************************SOLUTION****************************** */
 function compoundInterest(principalAmount , annualInterestRate , numberOfYears)
{ let answer = principalAmount;
    let year = 1;
    while (year<=numberOfYears) {
        let total = answer;
        let interestRate = total*annualInterestRate;
        answer = answer + interestRate
        year++;
    }
  return answer;

}