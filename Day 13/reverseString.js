let str = "Hello";

function reverseString(string){
    let srjString = string.split('').reverse().join('');

    return srjString;
}

let reverseSTR = reverseString(str);
console.log(reverseSTR);