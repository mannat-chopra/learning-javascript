/* You are tasked with developing a JavaScript function to analyze temperature data.
The function, temperatureInCelsius, takes a temperature value in Celsius as input,
performs a conversion to Fahrenheit, and determines whether the temperature is considered "hot" or not. 
Input:
Temperature(in celsius): 35
Output
true
Test Cases:-
The final output should be printed correctly.
Convert the "temperatureInCelsius" value to Fahrenheit by applying the appropriate formula and store it in a new variable.
 Check the value of this new variable by storing it in the variable name 'isHot' and check if it is greater than 86 or not.
If it is greater than 86 then it will return true otherwise false. */

/* ****************************************Solution ***************************************/
function temperatureInCelcius(temperatureInCelsius){
    let isHot = (temperatureInCelsius * 1.8) + 32;
    if (isHot>86) {
        return true;
    }
    else{
        return false;
    }
return isHot;
    }
