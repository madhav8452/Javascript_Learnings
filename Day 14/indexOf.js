let numbers = [1,2,3,4,5,6,7,8,9]
let target = 4;

function findIndex(number, target)
{
    return number.indexOf(target);
}

let index = findIndex(numbers, target)
console.log(index)