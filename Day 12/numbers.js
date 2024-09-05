let numbers = [1,2,3,4,5];
let sum = 0;

for(let x = 0; x <= numbers.length - 1; x++)
{
    sum += numbers[x];
}

console.log("Sum of array is", sum);