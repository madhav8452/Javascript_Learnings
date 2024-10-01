let str = ["Madhav", "Priyank", "Milind"]

function areAllStringsLong(string){
    return string.length > 5;
}

let string = str.every(areAllStringsLong);

console.log(string);