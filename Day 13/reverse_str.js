function reverseString(inputstr)
{
    return inputstr.split('').reverse().join('');
}

let inputString = "hello";
let outputString = reverseString(inputString);
console.log(outputString);
