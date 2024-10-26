function fetchData(){
    fetch(`http://localhost:3000/cart`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        
        document.querySelector(".product").innerHTML = view(res);
        document.querySelector(".totaldiv").innerHTML = `<p>Total = ₹${total}</p>`
    })
    .catch((error)=>{
        alert("Failed to Fetch Cart Data:", error);
    })
}

fetchData();

let total = 0;
let quantity = 1;

function view(res){
    return res.map((el)=>{
        Math.floor(total += el.price * el.quantity)
        return `<div class="card">
                    <div class="image">
                        <img src="${el.image}" alt="">
                    </div>
                    <div class="details">
                        <p class="title">${el.title}</p>
                        <p class="price">₹${el.price}</p>
                        <p class="rating"><i class="fa-solid fa-star"></i> ${el.rating.rate} (${el.rating.count})</p>
                    </div>
                    <div class="add-div">
                        <div id="quantity">
                            <button id="minus" onclick="EditQty('dec', '${el.id}', '${el.quantity}')"><i class="fa-solid fa-minus"></i></button>
                            <div id="quantityData">${el.quantity}</div>
                            <button id="plus" onclick="EditQty('inc', '${el.id}', '${el.quantity}')"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button id="deletedata" onclick="deletedata('${el.id}')"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`
    }).join("");
}

// DELETE DATA

function deletedata(id){
    console.log(id)
    fetch(`http://localhost:3000/cart/${id}`,{
        method : "DELETE"
    })
}

// QUANTITY OF PRODUCTS

function EditQty(clickbtn, id, quantity){
    
    if(clickbtn == 'inc'){
        quantity = eval(quantity) + 1;

        fetch(`http://localhost:3000/cart/${id}`, {
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({quantity : quantity})
        })
    }
    else{
        if(quantity > 1){
            quantity = eval(quantity) - 1;
    
            fetch(`http://localhost:3000/cart/${id}`, {
                method : "PATCH",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({quantity : quantity})
            })    
        }
    }
}