var storedpassword = 'Madhav@123';

function currentpassword()
{
    var currentpass = document.getElementById("currentpass").value;
    
    if(storedpassword === currentpass)
    {
        errormessage.textContent = `Enter New Password`
        errormessage.style.color = `green`
    }
    else
    {
        errormessage.textContent = `Incorrent Password`
        errormessage.style.color = `red`;
    }
}

function changepassword()
{
    var newpassword = document.getElementById("newpass").value;

    if(newpassword.length >= 8)
    {
        errormessage.textContent = `Password Change Successfully.`;
        errormessage.style.color = `green`;
    }
    else
    {
        errormessage.textContent = `New password must be at least 8 characters long.`
        errormessage.style.color = `red`;
    }
}