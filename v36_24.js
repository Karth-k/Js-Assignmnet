// // Write a function to sort an array without using built-in methods.


let Sort =(arr)=>{
    let n =arr.length
    for(let i=0;i<n-1;i++){
        for(let j= 0; j<n -i-1;j++){
            if(arr[j]<arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                
            }
        }
    }
    return arr
}
let arr=[1,3,5,99,12,43]
let Output=Sort(arr)
console.log(Output);



//     let arr=[1,3,5,99,12,43]
//     let n =arr.length
//     let new_arr=[]
//     for(let i=0;i<n-1;i++){
//         for(let j= 0; j<n -i-1;j++){
//             if(arr[j]<arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1]=temp
//             }
//         }
//     }
// console.log(arr);

