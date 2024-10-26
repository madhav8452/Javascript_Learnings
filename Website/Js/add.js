document.getElementById("add-close").addEventListener("click", ()=>{
    document.querySelector(".add").style.transform = "translatey(-100px)"
    document.querySelector(".add").style.opacity = "0"
    document.querySelector(".add").style.zIndex = "-1"
})

setTimeout(() => {
    document.querySelector(".add").style.transform = "translatey(0)"
    document.querySelector(".add").style.opacity = "1"
    document.querySelector(".add").style.zIndex = "2"
}, 2000);

setTimeout(()=>{
    document.querySelector("#gift-gif").style.display = "flex";
}, 5000)

document.querySelector("#gift-gif").addEventListener("click",()=>{
    document.querySelector(".add").style.transform = "translatey(0)"
    document.querySelector(".add").style.opacity = "1"
    document.querySelector(".add").style.zIndex = "2"
})
