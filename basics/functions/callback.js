// Callback Function
function greet(wish){
    console.log(`${wish()}, welcome to the Javascript Course`);
}

function sayHi(){
    return 'Hi!'
}

function sayHello(){
    return 'hello'
}

function goodMorning(){
    return 'goodMorning'
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);