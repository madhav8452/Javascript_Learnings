let array = [2,4,6,8]

function calculateArea(length){
    return length * length;
}

let area = array.map((num) => {
    return calculateArea(num);
});

console.log(area);