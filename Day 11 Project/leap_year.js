function isLeapYear(num)
{
    if(num % 4 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let result = isLeapYear(2020);
console.log(result);