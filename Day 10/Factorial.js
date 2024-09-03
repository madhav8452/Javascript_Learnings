function findFactorial(num)
{
    let fact = 1;

    for(let i = 1; i <= num; i++)
    {
        fact *= i;
    }

    return fact;
}

let result = findFactorial(5);
console.log("Factorial is", result);