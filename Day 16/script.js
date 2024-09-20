function quote(){

    let data = [
        {
            person : "William Shakespeare",
            quote : "A rose by any other name would smell as sweet."
        },
        {
            person : "William Shakespeare",
            quote : "All that glitters is not gold."
        },
        {
            person : "John Kennedy",
            quote : "Ask not what your country can do for you; ask what you can do for your country."
        },
        {
            person : "Woody Allen",
            quote : "Eighty percent of success is showing up."
        },
        {
            person : "Thomas Edison",
            quote : "Genius is one percent inspiration and ninety-nine percent perspiration."
        },
        {
            person : "Rudyard Kipling",
            quote : "He travels the fastest who travels alone."
        }
    ]
    
    let value = Math.floor(Math.random()*data.length)
    document.getElementById("quote").innerHTML = `<h3>${data[value].quote}</h3> <p>-${data[value].person}</p>`
    console.log(data[value])
}
    
quote()