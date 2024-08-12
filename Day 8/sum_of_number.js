let num = 5555;
let sum = 0;
let digit = 0;

while(num > 0)
{
    digit = num % 10;
    num = Math.floor(num / 10);
    sum = sum + digit;
}
console.log(sum);