let arr = [1,2,3,4,5,6,7,8,9,10]

function getEvenNumbers(number)
{
    return number.filter(number => number % 2 == 0)
}

let Even = getEvenNumbers(arr)
console.log(Even);