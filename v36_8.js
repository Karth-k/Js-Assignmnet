// Write a function to find the maximum number in an array.

let max = (arr_1) =>{
    let new_max=-Infinity
    for(let i of arr_1){
        if(i>new_max){
            new_max=i
        }
    }
    return new_max
}

let inp_arr=max([1,5,6,10,2,4,22])
console.log(inp_arr);
