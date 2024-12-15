// Write a function to calculate the factorial of a number

let fact = (num) =>{
    if(num==0){
        return 1
    }
    let result=1
    for(let i=1;i<=num;i++){
        result *=i
    }
    return result
}
let number = fact(0)
console.log(number);



// let n = 4
// if(n==0) return 1

// let result=1
// for(let i =1;i<=n ; i++){
//     result *=i
// }
// console.log(result);



