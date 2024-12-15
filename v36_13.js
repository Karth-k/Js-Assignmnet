// Write a JavaScript code to extract numbers between two characters in a string and add them all.


let str = "a12bV34c56d12";

// Step 1: Extract all sequences of digits as strings
let matches = str.match(/\d+/g);

// Step 2: Convert each extracted string to a number
let numbers = matches.map(numStr => Number(numStr));

// Step 3: Calculate the sum of all numbers
let result = numbers.reduce((acc, num) => {
    console.log(`Adding ${num} to the running total ${acc}`);
    return acc + num;
},0);

console.log(result); // Outputs the sum of all numbers


// let str = "a12b34c56d"
// let extract= str.match(/^[a-zA-Z](\d+)[a-zA-Z]/)
// console.log(extract);

// let result = 0
// for(let i of new_num){
//     result+= i
// }
// console.log(result);

