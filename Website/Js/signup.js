document.getElementById("signupSubmit").addEventListener("click", (e)=>{
    e.preventDefault();

    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let isValid = true;

    document.getElementById("wrongUsername").innerText = ``;
    document.getElementById("wrongEmail").innerText = ``;
    document.getElementById("wrongPassword").innerText = ``;

    let userRegex = /^[0-9A-Za-z]{6,16}$/

    if(username == 0){
        document.getElementById("wrongUsername").innerText = `*Username must not be Empty.`
        document.getElementById("wrongUsername").style.textAlign = `start`;
        isValid = false;
    }
    else{
        if(!userRegex.test(username)){
            document.getElementById("wrongUsername").innerText = `*Username should be numeric,uppercase & lowercase.`;
            document.getElementById("wrongUsername").style.textAlign = `start`;
            isValid = false;
        }
        else{
            document.getElementById("wrongUsername").innerText = `Username is valid.`;
            document.getElementById("wrongUsername").style.textAlign = `start`;
            document.getElementById("wrongUsername").style.color = `greenyellow`;
        }
    }

    let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    if(email == 0){
        document.getElementById("wrongEmail").innerText = `*Email must not be Empty.`;
        document.getElementById("wrongEmail").style.textAlign = `start`;
        isValid = false;
    }
    else{
        if(!emailRegex.test(email)){
            document.getElementById("wrongEmail").innerText = `*Email is not valid.`;
            document.getElementById("wrongEmail").style.textAlign = `start`;
            isValid = false;
        }
        else{
            document.getElementById("wrongEmail").innerText = `Email is valid.`;
            document.getElementById("wrongEmail").style.textAlign = `start`;
            document.getElementById("wrongEmail").style.color = `greenyellow`;
        }
    }

    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/
    if(password == 0){
        document.getElementById("wrongPassword").innerText = `*Password must not be Empty.`;
        document.getElementById("wrongPassword").style.textAlign = `start`;
        isValid = false;
    }
    else{
        if(!passwordRegex.test(password)){
            document.getElementById("wrongPassword").innerText = `*Password must be between 6 to 20 characters long & contain uppercase,lowercase & special Characters.`
            document.getElementById("wrongPassword").style.textAlign = `start`;
            isValid = false;
        }
        else{
            document.getElementById("wrongPassword").innerText = `Password is valid.`;
            document.getElementById("wrongPassword").style.textAlign = `start`;
            document.getElementById("wrongPassword").style.color = `greenyellow`;
        }
    }

    if(isValid){
        let obj = {
            username : username,
            email : email,
            password : password
        }

        fetch("http://localhost:3000/users",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            Swal.fire({
                title: "Thank You!",
                text: "Form successfully created.",
                icon: "success"
            });
        })
    }
})