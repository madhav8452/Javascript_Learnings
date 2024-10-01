let obj1 = {
    title : "Tshirt",
    price : 250
}

let obj2 = {
    title : "Jeans",
    price : 500
}

let product = [obj1, obj2];

let sum = 0;
product.map((el)=>{
    return sum += el.price;
})

console.log(sum)
