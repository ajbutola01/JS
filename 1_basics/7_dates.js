let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())

//console.log(Date.now())

let newDate = new Date()
console.log(newDate)

console.log(newDate.toLocaleString("default",{
    weekday: "long",
    year: "2-digit",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"  
})
)   