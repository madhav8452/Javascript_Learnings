function generatePrimeNumbers(n)
{
    let num = 2;
    
    while(num <= n)
    {
        let divisor = 2;
        let isPrime = true;

        while(divisor < num)
        {
            if(num % divisor == 0)
            {
                isPrime = false;
            }
            divisor++;
        } 

        if(isPrime)
        {
            console.log(num);
        }        
        num++;
    }
}

generatePrimeNumbers(20);

