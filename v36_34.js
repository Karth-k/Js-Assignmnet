//  Write a function to find how many times each element is repeated in an array.


let count = (arr)=>{
    let emp_arr ={}
    for(let i of arr){
        if(emp_arr[i]){
            emp_arr[i]++
        }
        else{
            emp_arr[i]=1
        }
    }
    return emp_arr
}

let inp_arr = count ([10,2,45,10,67,89,90,2])
console.log(inp_arr);

