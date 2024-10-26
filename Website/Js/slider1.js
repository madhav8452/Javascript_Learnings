let arr = [
    "slider1img/1.jpg",
    "slider1img/2.jpg",
    "slider1img/3.jpg",
    "slider1img/4.jpg",
    "slider1img/5.jpg"
]

let a = -1;

setInterval(()=>{
    if(a == 4){
        a = -1;
    }
    else{
        a++;
        document.querySelector(".section1").innerHTML = `<img src="${arr[a]}">`
    }
},1500)