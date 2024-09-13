let number = [1,2,3,4,5]

function evenNumber(number)
{
    return number.filter(number => number % 2 == 0)
}

let result = evenNumber(number);
console.log(result);