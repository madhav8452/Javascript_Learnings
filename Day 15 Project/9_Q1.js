let numbers = [1,3,5,7]

let even = numbers.some((num)=>{
    return num % 2 == 0;
})

console.log(even);