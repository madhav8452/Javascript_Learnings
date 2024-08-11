let storeduser = 'Madhav';
let storedpassword = 'madhav';

function currentpassword()
{
    let currentpass = document.getElementById("currentpass").value;
    
    if(storedpassword === currentpass)
    {
        errormessage.textContent = `Enter New Password`;
        errormessage.style.color = `green`;
        errormessage.style.transition = `1s`;
        newpassword.style.transform = `scale(1)`;
        newpassword.style.transition = `1s`;
    }
    else
    {
        errormessage.textContent = `Incorrect Password`
        errormessage.style.color = `red`;
        errormessage.style.transition = `1s`;
    }
}

function changepassword()
{
    let newpassword = document.getElementById("newpass").value;

    if(newpassword.length >= 8)
    {
        storedpassword = newpassword;

        errormessage.textContent = `Password Changed Successfully!`;
        errormessage.style.color = `green`;
        errormessage.style.transition = `1s`;
        wrapper.style.transform = `rotatey(180deg)`;
    }
    else
    {
        errormessage.textContent = `New password must be at least 8 characters long.`
        errormessage.style.color = `red`;
        errormessage.style.transition = `1s`;
    }                
}

function login()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(storeduser == username)
    {
        if(storedpassword == password)
        {
            loginerrormessage.textContent = `Login Successful!`
            loginerrormessage.style.color = `green`;
            loginerrormessage.style.transition = `1s`;     
        }
        else
        {
            loginerrormessage.textContent = `Incorrect Password (Enter New Password)`
            loginerrormessage.style.color = `red`;
            loginerrormessage.style.transition = `1s`;
        }
    }
    else
    {
        loginerrormessage.textContent = `Incorrect Username`
        loginerrormessage.style.color = `red`;
        loginerrormessage.style.transition = `1s`;
    }
}