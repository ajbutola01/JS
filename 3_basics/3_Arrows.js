const user = {
    username: "Ajay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// const chai = function () {
//     let username = "Ajay"
//     // console.log(this.username);
// }

// chai();

const chai = () => {
    let username = "Ajay"
    console.log(this);
}

chai();

const addTwo(num1 , num2){
    return num1 + num2
}

const addTwo(num1, num2) => num1 +num2