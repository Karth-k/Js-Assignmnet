//   Write a function to add zeros after every 3 values in an array.


let add = (arr) => {
    let emp_arr=[]

    for(let i=0;i<arr.length ; i++){
        if((i+1)%3 == 0){
            emp_arr.push(0)
        }
        emp_arr.push(arr[i])
    }
    return emp_arr
}

let inp_arr =add( [1,4,5,6,7,8,23,56,78,24])
console.log(inp_arr);

