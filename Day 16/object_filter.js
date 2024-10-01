let obj1 = {
    title : "Tshirt",
    price : 250
}

let obj2 = {
    title : "Jeans",
    price : 500
}


let product = [obj1, obj2]

let a = product.filter((el)=>{
    return el.price <= 300;
})

let b = product.filter((el)=>{
    return el.title == "Tshirt" || el.price == 500
})

console.log(c);