// Write a program to add zeros after every 3 values in an array.

let arr_1=[1,2,4,5,6,7,2,1,10,34,12,45,67,12]
let end_arr=[]

for(let i =0;i<arr_1.length;i++){
    if( (i+1) %4 == 0){
        end_arr.push(0)
    }
    end_arr.push(arr_1[i])
}
console.log(end_arr);




