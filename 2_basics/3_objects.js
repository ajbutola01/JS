// singleton object
// Object.create
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ajay",
    "full name": "Ajay Butola",
    [mySym]: "mykey1",
    age: 18,
    location: "India",
    email1: "ajbutola01@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser.email1)
// console.log(JsUser["email1"])
// console.log(JsUser[mySym])

// JsUser.email1 = "ajblablabla@gmail.com"
// Object.freeze(JsUser)
// JsUser.email1 = "ajbutola02@gmail.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser")
}

JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());