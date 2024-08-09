function result()
{
    let percent = Number(document.getElementById("result").value);

    if(percent >= 1 && percent <= 100)
    {
        if(percent >= 90 && percent <= 100)
            {
                document.getElementById("resultans").innerHTML = `Grade A`;
                resultans.style.color = `green`;
                resultans.style.fontWeight = `bold`;
            }
            else if(percent >= 80 && percent <= 89)
            {
                document.getElementById("resultans").innerHTML = `Grade B`;
                resultans.style.color = `green`;
                resultans.style.fontWeight = `bold`;
            }
            else if(percent >= 70 && percent <= 79)
            {
                document.getElementById("resultans").innerHTML = `Grade C`;
                resultans.style.color = `green`;
                resultans.style.fontWeight = `bold`;
            }
            else if(percent >= 60 && percent <= 69)
            {
                document.getElementById("resultans").innerHTML = `Grade D`;
                resultans.style.color = `green`;
                resultans.style.fontWeight = `bold`;
            }
            else
            {
                document.getElementById("resultans").innerHTML = `Grade F`;
                resultans.style.color = `red`;
                resultans.style.fontWeight = `bold`;
            }        
    }
    else
    {
        document.getElementById("resultans").innerHTML = `Error: Enter the correct Marks`;
        resultans.style.color = `red`;
        resultans.style.fontWeight = `bold`;
    }
}

function leap()
{
    let leap = Number(document.getElementById("leap").value);

    if(leap % 4 == 0 && leap % 100 != 0 || leap % 400 == 0)
    {
        document.getElementById("leapans").innerHTML = `Leap Year`;
        leapans.style.fontWeight = `bold`;
    }
    else
    {
        document.getElementById("leapans").innerHTML = `Not a Leap Year`;
        leapans.style.fontWeight = `bold`;
    }
}

function angle()
{
    let angle = Number(document.getElementById("angle").value);

    if(angle >= 0 && angle <= 360)
    {
        if(angle >= 0 && angle <= 90)
        {
            document.getElementById("angleans").innerHTML = `First Quadrant`;
            angleans.style.color = `green`;
            angleans.style.fontWeight = `bold`;    
        }
        else if(angle >= 91 && angle <= 180)
        {
            document.getElementById("angleans").innerHTML = `Second Quadrant`;
            angleans.style.color = `green`;
            angleans.style.fontWeight = `bold`;    
        }
        else if(angle >= 181 && angle <= 270)
        {
            document.getElementById("angleans").innerHTML = `Third Quadrant`;
            angleans.style.color = `green`;
            angleans.style.fontWeight = `bold`;    
        }
        else
        {
            document.getElementById("angleans").innerHTML = `Fourth Quadrant`;
            angleans.style.color = `green`;
            angleans.style.fontWeight = `bold`;    
        }
            
    }
    else
    {
        document.getElementById("angleans").innerHTML = `Error: Angle must be into 0 to 360 degree`;
        angleans.style.color = `red`;
        angleans.style.fontWeight = `bold`;
    }
}

function amount()
{
    let amount = Number(document.getElementById("amount").value);
    let percentamount, total;

    if(amount >= 0 && amount <= 100)
    {
        percentamount = amount * 0 / 100;
        total = amount - percentamount;

        document.getElementById("erroramount").innerHTML = `No discount Applied <br> For discount purchase amount must be above 100.`;
        erroramount.style.color = `red`;
        erroramount.style.fontWeight = `bold`;
        document.getElementById("original").innerHTML = `Original Amount: ${amount.toFixed(2)}`;
        original.style.color = `green`;
        original.style.fontWeight = `bold`;
        document.getElementById("discount").innerHTML = `Discount Amount: ${percentamount.toFixed(2)}`;
        discount.style.color = `green`;
        discount.style.fontWeight = `bold`;
        document.getElementById("final").innerHTML = `Final Amount: ${total.toFixed(2)}`;
        final.style.color = `green`;
        final.style.fontWeight = `bold`;
    }
    else if(amount >= 101 && amount <= 500)
    {
        percentamount = amount * 5 / 100;
        total = amount - percentamount;

        document.getElementById("erroramount").innerHTML = `Discount applied 5%.`;
        erroramount.style.color = `green`;
        erroramount.style.fontWeight = `bold`;
        document.getElementById("original").innerHTML = `Original Amount: ${amount.toFixed(2)}`;
        original.style.color = `green`;
        original.style.fontWeight = `bold`;
        document.getElementById("discount").innerHTML = `Discount Amount: ${percentamount.toFixed(2)}`;
        discount.style.color = `green`;
        discount.style.fontWeight = `bold`;
        document.getElementById("final").innerHTML = `Final Amount: ${total.toFixed(2)}`;
        final.style.color = `green`;
        final.style.fontWeight = `bold`;
    }
    else if(amount >= 501 && amount <= 1000)
    {
        percentamount = amount * 10 / 100;
        total = amount - percentamount;

        document.getElementById("erroramount").innerHTML = `Discount applied 10%.`;
        erroramount.style.color = `green`;
        erroramount.style.fontWeight = `bold`;
        document.getElementById("original").innerHTML = `Original Amount: ${amount.toFixed(2)}`;
        original.style.color = `green`;
        original.style.fontWeight = `bold`;
        document.getElementById("discount").innerHTML = `Discount Amount: ${percentamount.toFixed(2)}`;
        discount.style.color = `green`;
        discount.style.fontWeight = `bold`;
        document.getElementById("final").innerHTML = `Final Amount: ${total.toFixed(2)}`;
        final.style.color = `green`;
        final.style.fontWeight = `bold`;
    }
    else
    {
        percentamount = amount * 15 / 100;
        total = amount - percentamount;

        document.getElementById("erroramount").innerHTML = `Discount applied 15%.`;
        erroramount.style.color = `green`;
        erroramount.style.fontWeight = `bold`;
        document.getElementById("original").innerHTML = `Original Amount: ${amount.toFixed(2)}`;
        original.style.color = `green`;
        original.style.fontWeight = `bold`;
        document.getElementById("discount").innerHTML = `Discount Amount: ${percentamount.toFixed(2)}`;
        discount.style.color = `green`;
        discount.style.fontWeight = `bold`;
        document.getElementById("final").innerHTML = `Final Amount: ${total.toFixed(2)}`;
        final.style.color = `green`;
        final.style.fontWeight = `bold`;
    }    
}   

function traffic()
{
    let light = document.getElementById("traffic").value;

    switch(light)
    {
        case "red" :
            document.getElementById("trafficans").innerHTML = `Stop`;
            trafficans.style.color = `red`;
            trafficans.style.fontWeight = `bold`;  
            break;
        
        case "yellow" :
            document.getElementById("trafficans").innerHTML = `Proceed with caution`;
            trafficans.style.color = `yellow`;
            trafficans.style.fontWeight = `bold`;  
            break;

        case "green" :
            document.getElementById("trafficans").innerHTML = `Go`;
            trafficans.style.color = `green`;
            trafficans.style.fontWeight = `bold`;  
            break;
    }
}
