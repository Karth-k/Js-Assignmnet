// Write a function sum(...numbers) that takes any number of arguments and 
// returns the sum of those arguments.

function sum(...numbers){
    let ans=0
    for(let i of numbers){
        ans +=i
     
    }
    return ans
}
let num=sum(10,30,40,50,80)
console.log(num)