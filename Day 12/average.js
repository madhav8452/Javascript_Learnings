let scores = [90, 80, 75, 95, 91,34,56,76];
let sum = 0;
let size = 0;

for(let x = 0; x <= scores.length - 1; x++)
{
    sum += scores[x];
    size++;
}

let avg = sum/size;
console.log(avg);

