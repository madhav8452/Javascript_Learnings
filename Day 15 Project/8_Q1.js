let numbers = [2,4,6,8]

let even = numbers.every((num)=>{
    return num % 2 == 0;
})

console.log(even);