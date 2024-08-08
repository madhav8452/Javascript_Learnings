
function month() {
    let monthInput = Number(document.getElementById("month").value);
  
    if (monthInput < 1 || monthInput > 12) {
      message.textContent = "Invalid month";
    }
    else
    {
        switch (monthInput) {
            case 12:
            case 1:
            case 2:
              message.textContent = "Winter";
              break;
            case 3:
            case 4:
            case 5:
              message.textContent = "Spring";
              break;
            case 6:
            case 7:
            case 8:
              message.textContent = "Summer";
              break;
            case 9:
            case 10:
            case 11:
              message.textContent = "Autumn";
              break;
            default:
              message.textContent = "Unknown season";
        }      
    }
}
  
function vowel()
{
    let vowel = document.getElementById("vowel").value;

    switch(vowel)
    {
        case "a" :
        case "e" :
        case "i" :
        case "o" :
        case "u" :
            vowelmsg.textContent = "Vowel"
            break;
        
        default :
            vowelmsg.textContent = "Consonant";
    }
}

function age()
{
    let age = document.getElementById("age").value;

    switch(true)
    {
        case age >= 1 && age <= 12 :
            agemsg.textContent = "Child";
            break;
        case age >= 13 && age <= 19 :
            agemsg.textContent = "Teen";
            break;
        case age >= 20 && age <= 59 :
            agemsg.textContent = "Adult";
            break;
        case age >= 60 :
            agemsg.textContent = "Senior";
            break;
    }
}

function calculator()
{
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let operator = document.getElementById("maths").value;
    

    switch(operator)
    {
        case "+" :
            result = first + second;
            ansmsg.textContent = `${result}`;
            break;
        case "-" :
            result = first - second;
            ansmsg.textContent = `${result}`;
            break;
        case "*" :
            result = first * second;
            ansmsg.textContent = `${result}`;
            break;
        case "/" :
            result = first / second;
            ansmsg.textContent = `${result}`;
            break;
        case "%" :
            result = first % second;
            ansmsg.textContent = `${result}`;
            break;
        default :
            ansmsg.textContent = 'Invalid Oprator';
    }
}

function triangle()
{
    let first = Number(document.getElementById("side1").value);
    let second = Number(document.getElementById("side2").value);
    let third = Number(document.getElementById("side3").value);
    let result = 0;    

    if(first == second && second == third && first == third)
    {
        result = 1;
    }
    else if (first == second || second == third || first == third)
    {
        result = 2;
    }
    else 
    {
        result = 3;
    }

    switch(result)
    {
        case 1 :
            anstriangle.textContent = "Equilateral";
            break;
        case 2 :
            anstriangle.textContent = "Isosceles";
            break;
        case 3 :
            anstriangle.textContent = "Scalene";
            break;
    }
}