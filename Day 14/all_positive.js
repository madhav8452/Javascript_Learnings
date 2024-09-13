let numbers = [1, 2, 3, 4, 5];

function areAllPositive(numbers) {
    return numbers.every(number => number > 0);
}

let arePositive = areAllPositive(numbers);
console.log(arePositive); // Output: true