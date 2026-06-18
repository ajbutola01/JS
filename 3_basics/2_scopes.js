if (true){
    let a = 10
    const b = 20
    var c = 30
}




// console.log(a);
// console.log(b);  
// console.log(c);

function one(){
    const username = "Ajay"

    function two(){
        const website = "youtube";
        // console.log(username)
    }

    // console.log(website)

    two()
}
one()


// +++++++++++++ interesting +++++++++++++++++++++



console.log(addone(10))


function addone(num){
    return num + 1
}

addone(5)



addtwo(5)
const addtwo = function(num){
    return num + 2
}
