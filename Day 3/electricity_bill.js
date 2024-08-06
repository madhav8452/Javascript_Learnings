let unit = 435;
let total;

if(unit <= 50)
{
    total = unit * 0.50;
}
else if(unit >= 51 && unit <= 150)
{
    total = (50 * 0.50) + (unit - 50) * 0.75;
}
else if(unit >= 151 && unit <= 250)
{
    total = (50 * 0.50) + (100 * 0.75) + (unit - 150) * 1.20;
}
else
{
    total = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + (unit - 250) * 1.50;
}

let percent = total * 20 / 100;

console.log("Additional surcharge:", percent);

let result = total + percent;

console.log("The electricity bill:", result.toFixed(2));