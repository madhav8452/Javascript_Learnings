function isPelindrome(str)
{
    let i = 0;
    let is_pelindrome = 1;
    let reversed_str = "";

    for(i = str.length - 1; i >= 0; i--)
    {
        reversed_str = reversed_str + str[i];
    }

    for(i = 0; i <= str.length - 1; i++)
    {
        if(str != reversed_str)
        {
            is_pelindrome = 0;
            break;
        }
    }

    if(is_pelindrome)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let result = isPelindrome("radar");
console.log(result);