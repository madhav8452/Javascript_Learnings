let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

months.splice(9);

for(let x = 0; x <= months.length - 1; x++)
{
    console.log(months[x]);
}