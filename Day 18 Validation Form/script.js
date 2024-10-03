document.getElementById("gotoLogin").addEventListener("click", function(){
    document.querySelector(".formWrapper").style.transform = "rotatey(180deg)"
})

document.getElementById("gotoSignup").addEventListener("click", function(){
    document.querySelector(".formWrapper").style.transform = "rotatey(0)"
})

let array = [];

document.getElementById("signupSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let isValid = true;
    document.getElementById("wrongUsername").innerText = "";
    document.getElementById("wrongEmail").innerText = "";
    document.getElementById("wrongPassword").innerText = "";

    var userRegex = /^[0-9A-Za-z]{6,16}$/

    if(username == 0){
        document.getElementById("wrongUsername").innerText = "Username must not be Empty.";
        isValid = false;
    }else{
        if(!userRegex.test(username)){
            document.getElementById("wrongUsername").innerText = "Username should be numeric,uppercase & lowercase.";
            isValid = false;
        }
    }

    var emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/

    if(email == 0){
        document.getElementById("wrongEmail").innerText = "Email must not be Empty";
        isValid = false;
    }else{
        if(!emailRegex.test(email)){
            document.getElementById("wrongEmail").innerText = "Email is not valid.";
            isValid = false;
        }
    }

    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/

    if(password < 8){
        document.getElementById("wrongPassword").innerText = "Password must not be Empty.";
        isValid = false;
    }else{
        if(!passRegex.test(password)){
            document.getElementById("wrongPassword").innerText = "Password must be between 6 to 20 characters long & contain uppercase,lowercase & special Characters.";
            isValid = false;
        }
    }

    let obj = {
        username,
        email,
        password,
    }

    if(isValid)
    {
        array.push(obj);
        Swal.fire({
            title: "Thank You!",
            text: "Form successfully created.",
            icon: "success"
        });    
    }
    console.log(array);
})

document.getElementById("loginSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPass = document.getElementById("loginPassword").value;

    isValid = true;
    document.getElementById("wrongLoginEmail").innerText = "";
    document.getElementById("wrongLoginPassword").innerText = "";

    var emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/

    if(!emailRegex.test(loginEmail)){
        document.getElementById("wrongLoginEmail").innerText = "Email is not valid."
        isValid = false;
    }

    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/

    if(!passRegex.test(loginPass)){
        document.getElementById("wrongLoginPassword").innerText = "Password must be between 6 to 20 characters long & contain uppercase,lowercase & special Characters."
        isValid = false;
    }

    if(isValid)
    {
        let a = array.filter((el) => el.email == loginEmail && el.password == loginPass);

        if(a.length){
            Swal.fire({
                text: "Login Successful!",
                icon: "success"
              });
        }
        else{
            alert("Incorrect email or password. Please Check your login credentials.");
        }    
    }
})

