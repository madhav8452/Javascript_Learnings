// Function that returns another function

function multiplier(factor){
    return function (x){
        return x * factor;
    }
}

let double = multiplier(2);
console.log(double(5));
