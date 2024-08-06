function swap() {
    let data1 = document.getElementById("data1").value
    let data2 = document.getElementById("data2").value

    let data3 = data1;
    data1 = data2;
    data2 = data3;
    
    document.getElementById("swapped").innerHTML = `Value of A is ${data1} <br> Value of B is ${data2}`;
}

function reminder()
{
    let reminder1 = document.getElementById("reminder1").value;
    let reminder2 = document.getElementById("reminder2").value;

    document.getElementById("reminderans").innerHTML=`${reminder1 % reminder2}`;
}

function square()
{
    let num1 = document.getElementById("square1").value
    let num2 = document.getElementById("square2").value
    let num3 = document.getElementById("square3").value

    let square1 = num1 * num1;
    let square2 = num2 * num2;
    let square3 = num3 * num3;

    let sum = square1 + square2 + square3;

    document.getElementById("square_sum").innerHTML=`${sum}`;
}

function leap()
{
    let leap = document.getElementById("leap").value;

    if(leap % 4 == 0)
    {
        document.getElementById("leapans").innerHTML=`True`;
    }
    else
    {
        document.getElementById("leapans").innerHTML=`False`;
    }
}