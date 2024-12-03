// Write a program that reverses a string using a loop.


let name_1="Rohit Sharma"
let name_2=name_1.split('')
let rev_name=""

while(name_2.length>0){
    rev_name+= name_2.pop()
}

console.log("Reversed String is" , rev_name);
