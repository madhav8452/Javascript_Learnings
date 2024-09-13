function generateNumber()
{
    let arr = [34,65,55,44,57,46,53,29,90,95];

    document.getElementById("input").innerText=`${arr[Math.floor(Math.random() * 10)]}`;
}