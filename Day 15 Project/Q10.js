let string = ["Apple", "Banana", "Pear"];

function fruitlength(string)
{
    return string.filter(string => string.length > 3)
}

let longfruit = fruitlength(string);
console.log(longfruit);