// Given an array of objects representing people with their names and ages,
//  use filter to get only the people who are 18 or older, and then use map to create an array of their names

 

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 }, 
    { name: "Eve", age: 20 }  
];

let out= people.filter((ages)=> ages.age>18)

let out_1=out.map((ages )=> ages.age)
console.log(`This is just the age: ${out_1}`);


let out_2=out.map(ages => ages.name)
console.log(out_2);


console.log(out);
