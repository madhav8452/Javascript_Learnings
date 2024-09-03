function countDigits(num)
{
    let digit, number, sum = 0, count = 0;

    while(num > 0)
    {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

let result = countDigits(12345)
console.log(result);