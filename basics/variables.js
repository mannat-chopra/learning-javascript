const accountID = 999;
let accountEmail = "mannat@gmail.com";
var accountPassword = "12345";
accountCity = "New Delhi";
let accountState;

// accountID = 888 //not allowed

accountEmail = "chopra@gmail.com";
accountPassword = "9876";
accountCity = "Mumbai";

/*
prefer not to use var
because of issue in block scope and functional scope.
*/
// console.log(accountID);
console.table([accountID,accountEmail, accountPassword, accountCity, accountState]);