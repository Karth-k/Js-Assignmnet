//   Write a function to find the second largest number in a nested array


let flat = (arr) =>{
    let new_arr=[]
    for(let i of arr){
        if(Array.isArray(i)){
            new_arr=new_arr.concat(flat(i))
        }
        else{
            new_arr.push(i)
        }
    }
    return new_arr
}

let second = (arr_1) => {
    let flat_arr=flat(arr_1)

    let frst_max=-Infinity
    let sec_max=-Infinity

    for(let i of flat_arr){
        if(i>frst_max){
            sec_max=frst_max
            frst_max = i
        }
        else if(i>sec_max && i!=frst_max){
            sec_max=i
        }
    }
    return {Second_Max:sec_max , Maximum_Number:frst_max}
}

let arr_1 =second([[3, 5], 10 ,[7, 2, 8], [6, 4]])
console.log(arr_1);
