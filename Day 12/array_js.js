// Can store different types in continuous manner on the basis of indexes
let arr = [12, "Madhav", true, null, undefined]; // Primitive data type
console.log(typeof arr);

let num = [1, 2, 3, 4, 5, 6, 7]; // indexes
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);
// console.log(num[5]);
// console.log(num[6]);

num[4] = 15;

console.log("Length of an num array: "+ num.length)

// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// JavaScript methods
num.push(22); // Adding new value at the end of an array
console.log(num)

num.pop(); // Removing last value from an array
console.log(num);

num.unshift(88); // Adding at the starting of index
num.shift(); // Removing at the starting of index