let num = 2;
let n = 19;

while(num <= n)
{
    let isPrime = true;
    let divisor = 2;

    while(divisor < num)
    {
        if(num % divisor == 0)
        {
            isPrime = false;
            break;
        }
        divisor++;
    }

    if(isPrime)
    {
        console.log(num);
    }
    num++
}