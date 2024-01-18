/* Write a javascript program to check if a number is composite or not. A composite number is a natural number or a positive integer that has more than two factors.
Expected Input
20
Expected Output
true
Expected Input
13
Expected Output
false
Test cases
a-If the number is composite store true in the answer
b-If the number is not composite store false in the answer */
/* *************************SOLUTION************************************ */
function Composite(number) {
    let answer;
   //Write your code here
    let isComposite = true;
    for(let i = 2; i<number; i++){
        if (number%i == 0) {
            return isComposite;
        }else{
            isComposite = false;
            return isComposite;
        }
    }
  return answer;
  }
  // console.log(Composite())