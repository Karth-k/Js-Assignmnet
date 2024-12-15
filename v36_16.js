// Write a program to remove the middle element from an array, or if the middle element is not there, 
// remove every element except the first and last ones.


let remove = (arr_1) =>{
    let arr_len =arr_1.length
    let middle_ind= arr_len /2
    if(arr_len %2 ==0){
        arr_1.splice(1,arr_len-2)
    }
    else{
        arr_1.splice(middle_ind,1)
    }
    return arr_1
} 

let ans= remove([1,23,4,5,6,7,8,9,43,65])
console.log(ans);

 