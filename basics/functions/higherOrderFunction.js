// Higher Order Function
// function higherOrder(fn){
//     return
// }

const input = [2, 3, 4, 5, 6, 7, 8, 12, 1, 4, 16];

// function square(input){
//     const squared = [];
//     for (const num of input) {
//         squared.push(num*num);
//     }
//     return squared;
// }
// //console.log(square(input));
// function cubes(input){
//     const cube = [];
//     for (const num of input) {
//         cube.push(num*num*num);
//     }
//     return cube ;
// }
//Console.log(cubes(input));


function operation(input , fn){
    const output = [];
    for (const num of input) {
        output.push(fn(num)); 
    }
    return output;
}

function square(num){
    return num*num;
}
function cube(num){
    return num*num*num;
}

console.log(operation(input, cube));


// this is called Higher order function
//function that accepts function as a perameter or if a function is returning a function from itself,  and return output. 
