function printMultiplicationTable(num)
{
    for(let i = 1; i <= 10; i++)
    {
        console.log(num, "x", i, "=", num*i);
    }
}

printMultiplicationTable(10);