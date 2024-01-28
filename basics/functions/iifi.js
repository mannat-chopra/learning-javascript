// iifi: immediately invoke function expression 
(function (a,b){
    console.log(a **b);
})


const user = (function (){
    const userData = {
        userName: 'John',
        userAge: 20
    }

    function getName(){
        console.log(userData.userName);
    }

    function updateAge(age){
        console.log(userData.userAge + age);
    }

    return {getName, updateAge};

})()

console.log(user);
console.log(user.userData);
// console.log(user.getName());
// user.updateAge(3);