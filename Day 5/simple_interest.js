let principal = 100;
let rate = 5;
let year = 2;

if(principal >= 0 && rate >= 0 && year >= 0)
{
    let simple_interest = principal * rate * year / 100;
    console.log("Simple interest: ", simple_interest);
}
else
{
    console.log("All the inputs are must be positive.");
}

