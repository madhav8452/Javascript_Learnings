let strings = ["apple", "banana", "orange", "grape"];
let target = "banana";

function containsString(strings, target) {
    return strings.includes(target);
}

let contains = containsString(strings, target);
console.log(contains); // Output: true