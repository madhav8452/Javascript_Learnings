let numbers = [1, 3, 5, 7, 9];

function hasAnyEvenNumber(numbers) {
    return numbers.some(number => number % 2 === 0); 
}

let hasEven = hasAnyEvenNumber(numbers);
console.log(hasEven); // Output: false