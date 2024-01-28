// Curring in JS
function add(a,b,c){
    return a+b+c;
}

//console.log(add(2,3,4));

function add1(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}
//console.log(add1(2)(3)(4));

// function power(a,b){
//     return b**a;
//}

function power(b){
    return function (a){
        return a**b;
    } 
}

const square = power(2);

// console.log(square(4)); 

const cube = power(3);

console.log(cube(2));