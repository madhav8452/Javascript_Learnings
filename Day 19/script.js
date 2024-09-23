let arr1 = [];

document.getElementById("signup").addEventListener("click", (e) => {
    e.preventDefault()
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let obj = {
        username,
        email,
        password,
    }

    arr1.push(obj);
    arr1.shift();
    console.log(arr1);
})

document.getElementById("SignP").addEventListener("click", function(){
    document.getElementById("SignupDiv").style.display = 'none';
    document.getElementById("LoginDiv").style.display = 'block';
})

document.getElementById("LoginP").addEventListener("click", function(){
    document.getElementById("SignupDiv").style.display = 'block';
    document.getElementById("LoginDiv").style.display = 'none';
})

// let arr2 = [];

// document.getElementById("loginbtn").addEventListener("click", (login) => {
//     login.preventDefault()
//     let email2 = document.getElementById("email2").value;
//     let password2 = document.getElementById("password2").value;

//     let obj2 = {
//         email2,
//         password2,
//     }

//     arr2.push(obj2);

//     function arrayEqual(arr1, arr2){
//         if(arr1.length === arr2.length){
//             document.getElementById("ans").innerHTML = `"Login Successfull"`;
//         }
//         else{
//             document.getElementById("ans").innerHTML = `"Email or Password not match"`;
//         }

//     }
//     console.log(arrayEqual(arr1, arr2));
// })