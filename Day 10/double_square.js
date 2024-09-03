function double(num)
{
    return num * 2;
}

function square(num)
{
    return num * num;
}

function doublesquare(number)
{
    let a = double(number);
    let result = square(a);
    
    console.log(result);
}

doublesquare(3);