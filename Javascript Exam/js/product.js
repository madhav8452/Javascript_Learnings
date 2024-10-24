fetch('http://localhost:3000/products')
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res);
    document.getElementById("box").innerHTML = view(res)
})
.catch((error)=>{
    alert("Failed to fetch product data:", error)
})

function view(res){
    return res.map((el)=>{
        return `<div id="card">
                    <div id="image">
                        <img src="${el.image}">
                    </div>
                    <div id="details">
                        <p id="title">${el.title}</p>
                        <p id="price">₹ ${el.price}</p>
                        <p id="rating"><i class="fa-solid fa-star"></i> ${el.rating.rate} (${el.rating.count})</p>
                        <div id="btn">
                            <button id="editbtn" onclick=edit("${el.id}")>Edit</button>
                            <button id="deletebtn" onclick=remove("${el.id}")>Delete</button>
                        </div>
                    </div>
                </div>`
    }).join("");
}

function remove(id){
    console.log(id);

    fetch(`http://localhost:3000/products/${id}`, {
        method : "DELETE"
    })
}

document.getElementById("editclose").addEventListener("click", ()=>{
    document.getElementById("editdiv").style.position = `fixed`
    document.getElementById("editdiv").style.top = `-100vh`
})

function edit(id){
    console.log(id)

    document.getElementById("editdiv").style.position = `fixed`
    document.getElementById("editdiv").style.top = `0`

    fetch(`http://localhost:3000/products/${id}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)

        document.getElementById("edittitle").value = res.title
        document.getElementById("editprice").value = res.price
        document.getElementById("editdescription").value = res.description
        document.getElementById("editrate").value = res.rating.rate
        document.getElementById("editcount").value = res.rating.count
        document.getElementById("editimage").value = res.image
    })

    document.getElementById("editform").addEventListener("submit", ()=>{
        let title = document.getElementById("edittitle").value
        let price = Number(document.getElementById("editprice").value)
        let description = document.getElementById("editdescription").value
        let rate = document.getElementById("editrate").value
        let count = document.getElementById("editcount").value
        let image =  document.getElementById("editimage").value

        let obj = {
            title : title,
            price : price,
            image : image,
            description : description,
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
    })
}