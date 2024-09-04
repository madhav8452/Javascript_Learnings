function isPrime(num)
{
    let x = 1;
    let count = 0;

    while(x <= num)
    {
        if(num % x == 0)
        {
            count++;
        }
        x++;
    }

    if(count == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let result = isPrime(7);
console.log(result);