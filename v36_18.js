// Write a function for input: 
// ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and output [101, 1001, 3211]

let arr_1=["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"]
let result =[]
for(let i of arr_1){
    let match_1 =i.match(/\d+/)
    console.log(`The ans is ${match_1}`);
    
}