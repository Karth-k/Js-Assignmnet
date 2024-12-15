// Write a function to flatten a nested array.

let flatten = (arr_1) =>{
    let emp_arr= []
    for(let i of arr_1){
        if(Array.isArray(i)){
            emp_arr= emp_arr.concat(flatten(i))
        }
        else{
            emp_arr.push(i)
        }
    }
    return emp_arr
}

let inp_arr=flatten([1,2,[ 3], [4, [5, 6]], 7])
console.log(inp_arr);
