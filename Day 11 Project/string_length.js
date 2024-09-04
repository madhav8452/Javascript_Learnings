function findStringLength(str)
{
    let count = 0;

    for(let x = 0; x <= str.length - 1; x++)
    {
        count++;
    }

    return count;
}

let result = findStringLength("hello");
console.log(result);