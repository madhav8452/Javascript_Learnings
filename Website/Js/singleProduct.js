let a = new URLSearchParams(window.location.search)

let id = a.get("id");

console.log(id);

fetch(`http://localhost:3000/products/${id}`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res);
    document.querySelector(".product").innerHTML = view(res);

    document.getElementById("cart").addEventListener("click", (e)=>{
        e.preventDefault();

        fetch(`http://localhost:3000/cart`)
        .then((cart)=>{
            return cart.json();
        })
        .then((cart)=>{
            console.log(cart);

            let existID = cart.find((item)=>{
                return item.id == res.id
            })

            if(existID){
                alert("Item already exist in cart")
            }
            else{
                fetch(`http://localhost:3000/cart`, {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application.json"
                    },
                    body : JSON.stringify({...res,quantity : 1})
                })

                alert("ADDED TO CART");
                document.getElementById("cartMSG").style.opacity = `1`
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    })
})
.catch((error)=>{
    alert("Failed to Fetch Product Data:", error);
})

function view(res){
        return `<div class="image">
                    <img src="${res.image}">
                </div>
                <div class="details">
                    <p class="title">${res.title}</p>
                    <p class="price">Price - ${res.price}</p>
                    <p class="description">${res.description}</p>
                    <p class="rating"><i class="fa-solid fa-star"></i> ${res.rating.rate} (${res.rating.count})</p>
                    <button id="cart">ADD TO CART</button>
                    <p id="cartMSG">ITEM ADDED IN THE CART</p>
                </div>`
}