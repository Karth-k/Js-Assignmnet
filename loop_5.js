// Write a program that uses a for in loop to loop through an object and prints the key-value pairs.
let obj_1=["Black","Red","Blue","Yellow","Green"]

for(let x in obj_1)
{
    // console.log(x + " Is the Key Value\n" + obj_1[x]+ " Is the value associated with it\n")
    console.log(`${x} is the key value ${obj_1[x]} is the value associated with it`);
    
}