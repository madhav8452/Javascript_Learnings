let num = 11;
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
    console.log(`${num} is Prime Number`);
}
else
{
    console.log(`${num} is not a Prime Number`);
}