function calculateAverage(num1, num2, num3)
{
    let sum;
    let avg;

    sum = num1 + num2 + num3;

    avg = sum / 3;

    return avg;
}

let result = calculateAverage(10, 15, 20);
console.log(result);