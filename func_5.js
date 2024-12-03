// Create an anonymous function that takes an array of numbers and returns the sum of all the numbers

let sum_Array= function(arr){
    let sum =0

    for(i=0;i<arr.length;i++){
        sum +=arr[i]
    }
    return sum

}

let num=[10,30,50]
let res=sum_Array(num)
console.log(res);

