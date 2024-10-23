console.log(2 + 2) // Output 4

console.log("2 + 2") // Output 2 + 2

console.log(eval("2 + 2")) // Output 4

console.log(eval(new String("2 + 2"))) // Output [String: '2 + 2']

console.log(eval("2 + 2") === eval("4")) // Output true

console.log(eval("2 + 2") == 4) // Output true

console.log(eval("2 + 2") === "4") // Output false