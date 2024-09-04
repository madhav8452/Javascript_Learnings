function calculateFactorial(num)
{
    if(num > 0)
    {
        let fact = 1;

        for(let x = 1; x <= num; x++)
        {
            fact *= x;
        }

        return fact;
    }
}

let result = calculateFactorial(5);
console.log("Factorial is", result);


