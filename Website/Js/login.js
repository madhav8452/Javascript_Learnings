document.getElementById("login").addEventListener("click", (e)=>{
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let isValid = true;

    document.getElementById("wrongLoginEmail").innerText = "";
    document.getElementById("wrongLoginPassword").innerText = "";

    let loginEmailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    if(email == 0){
        document.getElementById("wrongLoginEmail").innerText = "*Email must not be Empty.";
        document.getElementById("wrongLoginEmail").style.textAlign = "start";
        isValid = false;
    }
    else{
        if(!loginEmailRegex.test(email))
        {
            document.getElementById("wrongLoginEmail").innerText = "*Email is not valid";
            document.getElementById("wrongLoginEmail").style.textAlign = "start";
            isValid = false;
        }
    }

    if(password == 0){
        document.getElementById("wrongLoginPassword").innerText = "*Password must not be Empty.";
        document.getElementById("wrongLoginPassword").style.textAlign = "start";
        isValid = false;
    }

    if(isValid){
        fetch(`http://localhost:3000/users?email=${email}`)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            if(res[0].password == password){
                console.log(res);

                Swal.fire({
                    text: "Login Successful!",
                    icon: "success"
                });
            }
            else{
                alert("Incorrect email or password. Please Check your login credentials.");
            }
        })
    }
})