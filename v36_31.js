// Write a function to merge two arrays with extra zeros.


let merge = (arr_1,arr_2,zeros=0) => {
    let merged = arr_1.concat(arr_2)

    for(let i =0 ; i< zeros ; i++){
        merged.push(0)
    }

    return merged
}

let arr_1=[15,76,4]
let arr_2=[43,12,45]
let output = merge(arr_1,arr_2,6)
console.log(output);
