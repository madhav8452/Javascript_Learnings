let string = "banana";

let split = string.split('');

let str = split.every((char)=>{
    return "aeiou".includes(char);
})

console.log(str);