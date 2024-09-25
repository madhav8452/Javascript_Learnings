let number = [1,2,3,4,5,6]

function getEvenNumbers(number){
    return number.filter(number => number % 2 == 0);
}

console.log(getEvenNumbers(number))