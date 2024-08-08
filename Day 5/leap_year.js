let year = 2024;

if(year % 4 == 0 && year % 4 != 100 || year % 4 == 400)
{
    console.log("Leap year");
}
else
{
    console.log("Not a Leap year");
}