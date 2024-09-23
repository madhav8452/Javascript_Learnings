function divideNumbers(a, b){
    try{
        if(b == 0)
        {
            throw new Error ("Division by zero is not allowed");
        }
        else{
            return a / b;
        }
    }catch(error){
        console.log("An error Accoured:", error);
    }
}

let result = divideNumbers(10, 2);
console.log("Result:", result);