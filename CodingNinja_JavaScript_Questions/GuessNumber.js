/* Guess the Number using do while loop */

let randomNum = Math.round(Math.random() * 100);
console.log(randomNum);

let guessNum;

do {
    guessNum = prompt('Guess the Number')
    if (guessNum == randomNum) {
        console.log("Guessed Correctly!!");
    }else{
        console.log("Take another guess");
    }
} while (guessNum != randomNum);
