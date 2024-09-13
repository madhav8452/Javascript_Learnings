let number = [1,2,3];

function doublenumber(number)
{
    return number.map(number => number * 2)
}

let doublenumbered = doublenumber(number)
console.log(doublenumbered);