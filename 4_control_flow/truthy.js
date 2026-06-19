const userEmail = []

// if (userEmail) {
    // console.log("Got User Email")
// } else {
    // console.log("Dont have User Email")
// }

// falsy values
// false , 0 , -0 , "" , BigINT 0n , null , undefined , NaN

// truthy values
// "0", "false" , " " , [] , {} , function() {}\

if (userEmail.lenght === 0){
    console.log("Falsy Value");
}

const anyobj = {}
if (Object.keys(anyobj).length == 0) {
    console.log("Object is empty")
}
