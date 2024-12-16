// Reverse the array without using built-in functions


let Reverse= (arr_1)=>{
    let start =0
    let end =arr_1.length -1

    while(start < end){
        arr_1[start] = arr_1[end]
        arr_1[end] =arr_1[start]
        start++
        end--

    }
    return arr_1
}

let inp_arr= Reverse([1,3,4,5,6,7,8])
console.log(inp_arr);
