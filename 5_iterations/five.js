const coding = ["js" , 'ruby' , "python"]

coding.forEach(  function (item) {
    // console.log(item);
    
} )

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
})