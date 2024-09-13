let arr = ["cat", "dog"]

function UpperCase(string)
{
    return string.toUpperCase();
}

let toUpperCaseArr = arr.map(UpperCase);

console.log(toUpperCaseArr);