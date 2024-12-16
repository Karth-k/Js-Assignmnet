// Write a function that takes an array of numbers and returns a 
// new array where each element is doubled using the map method

let double = (arr_1)=> { 
    let new_arr= arr_1.map(dbl => dbl*dbl)
    return new_arr
}

let inp_arr=[1,3,5,6,7,8,9]
console.log(double(inp_arr));






