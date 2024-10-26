
// PRODUCT DATA

fetch(`http://localhost:3000/products`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res)
    document.querySelector(".product").innerHTML = view(res);
})
.catch((error)=>{
    alert("Failed to Fetch Product Data:", error);
})

function view(res){
    return res.map((el)=>{
        return `<div class="card">
                    <a href="singleProduct.html?id=${el.id}">
                        <div class="image">
                            <img src="${el.image}" alt="">
                        </div>
                        <div class="details">
                            <p class="title">${el.title}</p>
                            <p class="price">₹${el.price}</p>
                            <p class="rating"><i class="fa-solid fa-star"></i> ${el.rating.rate} (${el.rating.count})</p>
                        </div>
                    </a>
                    <div class="add-div">
                        <button id="editdata" onclick=editdata("${el.id}")>Edit</button>
                        <button id="deletedata" onclick=deletedata("${el.id}")><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`
    }).join("");
}

// DELETE DATA

function deletedata(id){
    console.log(id)
    fetch(`http://localhost:3000/products/${id}`,{
        method : "DELETE"
    })

    fetch(`http://localhost:3000/cart/${id}`,{
        method : "DELETE"
    })
}

// EDIT DATA

document.getElementById("editClose").addEventListener("click", ()=>{
    document.querySelector(".editData").style.marginTop = "-100vh"
})

function editdata(id){
    console.log(id)
    document.querySelector(".editData").style.marginTop = "0px";

    fetch(`http://localhost:3000/products/${id}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);

        document.getElementById("title").value = res.title
        document.getElementById("price").value = res.price
        document.getElementById("description").value = res.description
        document.getElementById("image").value = res.image
        document.getElementById("rate").value = res.rating.rate
        document.getElementById("count").value = res.rating.count
    })

    document.getElementById("editproducts").addEventListener("submit",(e)=>{
        e.preventDefault();
        console.log(id);
        
        let title = document.getElementById("title").value;
        let price = Number(document.getElementById("price").value);
        let description = document.getElementById("description").value;
        let image = document.getElementById("image").value;
        let rate = document.getElementById("rate").value;
        let count = document.getElementById("count").value

        let obj = {
            title : title,
            price : price,
            description : description,
            image : image,
            rating : {
                rate : rate,
                count : count
            }
        }

        fetch(`http://localhost:3000/products/${id}`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })

        fetch(`http://localhost:3000/cart/${id}`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })

        document.querySelector(".editData").style.marginTop = "-100vh"
    })
}



