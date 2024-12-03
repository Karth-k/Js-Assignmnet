// Write a function multiplyNumbers(a, b = 1) that multiplies two numbers. 
// If the second argument is not provided, use 1 as the default value.

function calc(a,b=1){
    let out= a* b
    return out
}
let ans=calc(2,3)
console.log(ans)