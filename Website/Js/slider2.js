let slider2 = [
    "slider2img/1.jpg",
    "slider2img/2.jpg",
    "slider2img/3.jpg",
    "slider2img/4.gif",
    "slider2img/5.jpg"
]

let b = -1;

setInterval(()=>{
    if(b == 4){
        b = -1;
    }
    else{
        b++
        document.querySelector(".section4content").innerHTML = `<img src="${slider2[b]}">`
    }
},1500)