fetch("https://fakestoreapi.com/products")
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res);
    document.getElementById("box").innerHTML = view(res);
})
.catch((error)=>{
    console.log(error);
})

function view(res){
    return res.map((el)=>{
        return `<div id="card">
                    <div id="img">
                        <img src="${el.image}">
                    </div>
                    <p id="title">${el.title}</p>
                    <p id="price">Price - ${el.price}</p>
                    <p id="cat">Category - ${el.category}</p>
                </div>`
    }).join("");
}