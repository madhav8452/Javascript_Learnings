// Function that takes a function as an argument

function greet(callback){
    return callback;
}

function sayHello(){
    return "Hello!";
}

console.log(greet(sayHello()));