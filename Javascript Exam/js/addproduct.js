document.getElementById("addbtn").addEventListener("click", ()=>{
    let title = document.getElementById("title").value;
    let price = Number(document.getElementById("price").value);
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value;
    let rate = document.getElementById("rate").value;
    let count = document.getElementById("count").value;

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

    fetch(`http://localhost:3000/products`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(obj)
    })
})