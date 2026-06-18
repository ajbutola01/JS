// Immediately Invoked Function Expression

(function tea(){
    console.log(`DB Connected`)
})();


( (name) => {
    console.log(`DB Connected Two ${name}`)
})("Ajay")