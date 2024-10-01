let numbers = [1,2,3,5,7]

function hasAnyEvenNumber(num){
    return num % 2 == 0;
}

let even = numbers.some(hasAnyEvenNumber)

console.log(even);
