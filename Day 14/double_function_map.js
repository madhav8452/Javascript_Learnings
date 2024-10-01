let numbers = [1,2,3,4,5]

function doubleNumbers(num){
    return num * 2;
}

let double = numbers.map((num)=>{
    return doubleNumbers(num);
})

console.log(double)