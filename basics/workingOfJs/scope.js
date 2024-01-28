// Scopes in JS

/* Global
function(Local)
Block */

var varNum = 10;
let letNum = 20;
const constNum = 30;

function print1(){
    var varLocal = 10;
    let letLocal = 20;
    const constLocal = 30;


    // console.log(varLocal, letLocal, constLocal);
    // console.log(varNum, letNum, constNum);

}

// console.log(varLocal, letLocal, constLocal);
// console.log(varNum, letNum, constNum);
// print();

//**************************************************************************** */

/* 
JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).
This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.
 */
var a = 10;
let b = 20;
const c = 30;

function print(){
    var a = 'ten'
    let b = 'twenty'

console.log('****************Inside Print Function**************');
console.log(a,b,c);
console.log("*******************");

function innerPrint(){
    var a = 'inner10'
    console.log("*Inside innerPrint Function*");
    console.log(a,b,c);
}
innerPrint();
}
console.log(a,b,c);
print();



