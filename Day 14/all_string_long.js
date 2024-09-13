let strings = ["apple", "banana", "orange", "grapefruit"];

function areAllStringsLong(strings) {
    return strings.every(string => string.length > 5);
}

let areLong = areAllStringsLong(strings);
console.log(areLong); // Output: true