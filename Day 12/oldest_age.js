let ages = [18, 30, 27, 85, 45]

let oldest_age = ages[0]

for(let x = 0; x <= ages.length - 1; x++)
{
    if(ages[x] > oldest_age)
    {
        oldest_age = ages[x];
    }
}

console.log("Oldest age is", oldest_age);