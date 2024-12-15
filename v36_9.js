// Write a function to remove duplicate arrays from an array of arrays.

let dupl= (arr_1)=>{
    let new_arr=[]
   
    for(i of arr_1){
        let isDuplicate=false
        for(j of new_arr){
            if(JSON.stringify(i)==JSON.stringify(j)){
                isDuplicate=true
                break
            }
        }
        if(!isDuplicate){
            new_arr.push(i)
        }
    }
    return new_arr
}
let inp_arr=dupl([
    [1,2,3],
    [2,4,3],
    [5,7,8],
    [1,2,3],
    [5,7,8],
    [8,9,10]
])
console.log(inp_arr);
