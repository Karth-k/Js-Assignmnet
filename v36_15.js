// Write a program to find the missing numbers in an array containing numbers from 1 to 100.

let findMissNum = (arr_1) =>{
    let result=[]
    for(let i=0;i<=100;i++){
        if(!arr_1.includes(i)){
            result.push(i)
        }

    }
    return result
}

let arr_1=[1,2,45,6,78,34,67,88,90,23,46,77]
let miss_num=findMissNum(arr_1)
console.log(miss_num);
