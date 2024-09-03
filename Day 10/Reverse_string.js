function reverseString(str)
{
    let reversedStr = "";

    for(let i = str.length - 1; i >= 0; i--)
    {
        reversedStr += str[i];
    }

    return reversedStr;
}

let result = reverseString("Hello");
console.log(result);