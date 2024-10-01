let numbers = [1,2,3,4,5,6,7,8,9]

function getEvenNumbers(num){
    return num % 2 == 0;
}

let Even = numbers.filter((num)=>{
    return getEvenNumbers(num);
})

console.log(Even);