let string = "Madhav";

let split = string.split('');

let uppercase = split.some((char)=>{
    return char === char.toUpperCase();
})

console.log(uppercase);