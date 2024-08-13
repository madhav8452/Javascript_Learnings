let n = 10;

for(let x = 0; x < n; x++)
{
    let str = "";

    for(let y = 0; y < n; y++)
    {
        if(x == 0 || y == 0 || x == n - 1 || y == n - 1 || x == y || x + y == n - 1)
        {
            str += "* ";
        }
        else
        {
            str += "  ";
        }
    }
    console.log(str);
}