/* Create a program that determines if a patient has a fever based on their body temperature reading.
Test Cases:-
There shoul be a correctly defined temperature function 
a- Apply the required conversion formula to convert the tempF value in Faherenheit to Celsius and store the result in a new variable.
b- Then apply the if condition to check whether the converted value is greater than or equal to 37.
c- If the value is greater than or equal to 37 then in "result" it should store that "you have got a fever" with the remperature value converted to one decimal place.
d- If the value is ledd than 37 then in "result" it should store that "you don't have a fever with the temperature value converted to one decimal place.
"
Hints:-
To round the converted temperature to one decimal place using the toFixed() method. */

/* *****************************SOLUTION****************************************** */

function main(tempF) {
    let result;
    let celsiusT = (tempF-32)*5/9;
    let celsiusTemp = celsiusT.toFixed();
    // write your code here
    if (celsiusTemp>=37) {
        result = "you have got a fever";
    }
    if (celsiusTemp<37) {
        result = "you don't have a fever";
    }

    return result;
  }
  console.log(main(110));
  