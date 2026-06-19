const shoppingCart = [
    {
        courseName : "JavaScript",
        price : 1299
    },
    {
        courseName : "Python",
        price : 799
    },
    {
        courseName : "C++",
        price : 599
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price , 0)
console.log(priceToPay);