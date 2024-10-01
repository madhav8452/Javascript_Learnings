let numbers = [1,2,3,4,5]

function areAllPositive(num){
    return num > 0;
}

let positive = numbers.every(areAllPositive)

console.log(positive);