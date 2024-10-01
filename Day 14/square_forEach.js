let numbers = [1,2,3,4,5]

function printSquare(num){
    return num * num;
}

numbers.forEach((num)=>{
    console.log(printSquare(num));
})

