// Write a program that finds the largest number in an array using a for of loop.

let arr_1=[10,20,30,40,50,60,70,80,90,100]

let number=arr_1[0]
for (let i of arr_1) {
    if (i > number) {
        number = i;  
    }
}
console.log("The largest number is:", number);
