let arr = [1,2,3,4,5]

function doubleNumber(number)
{
    return number.map(number => number * 2)
}

let doubledNumber = doubleNumber(arr)

console.log(doubledNumber)