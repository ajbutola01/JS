// // const tinderUser = new Object();   //SINGLETON OBJECT
// const tinderUser = {}

// tinderUser.id = "12345"
// tinderUser.name = "Ajay"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userFullname: {
//             firstName: "Ajay",
//             lastName: "Butola",
//         }
//     }
// }
// // console.log(regularUser.fullname.userFullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// // const obj3 = { obj1, obj2}
// // const obj3 = Object.assign({},obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3)


// const users = [
//     {userId: 1, userName: "Ajay"},
//     {userId: 2, userName: "Vivek"},
//     {userId: 3, userName: "Aakash"},
// ]

// users[1].userName
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Ajay Butola",
}

// course.courseInstructor

const {courseInstructor: instructor} = course;

console.log(instructor)