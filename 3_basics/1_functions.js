


function sayMyName(){
    console.log("A");
console.log("J");
console.log("A");
console.log("Y");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2){
//     // let result = number1 + number2;
//     // return result;
//     return number1 + number2;
// }

// const result = addTwoNumbers(5, 10);
// // console.log("Result:",result);


// function LoggedIn(Username = "sam"){
//     if( !Username ){
//         console.log("Please Enter a valid Username")
//         return
//     }
//     return `${Username} just logged in`
// }

// console.log(LoggedIn())


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500))

const user = {
    username: "Ajay",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const myNewArray = [ 100, 200 , 400, 600]

function secondValueOfArray(anyArray){
    return anyArray[1]
}

console.log(secondValueOfArray(myNewArray))