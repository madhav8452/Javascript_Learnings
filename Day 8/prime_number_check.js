let num = 5;
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
    console.log(num + " is a Prime number");
}
else
{
    console.log(num + " is not a prime number");
}