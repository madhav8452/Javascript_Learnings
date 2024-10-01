let arr = [1,2,3,4]

function calculateCube(num){
    return num * num * num;
}

let cube = arr.map((num) => {
    return calculateCube(num);
})

console.log(cube);