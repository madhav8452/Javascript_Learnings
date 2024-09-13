let numbers = [1, 2, 3, 4, 5, 6];
let target = 4;

function containsValue(numbers, target) {
    return numbers.includes(target);
}

let contains = containsValue(numbers, target);
console.log(contains); // Output: true