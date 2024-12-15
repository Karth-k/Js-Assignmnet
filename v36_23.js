// Write a function to find the second maximum and minimum numbers in an array.


let calculate = (arr_1)=>{
    let max=-Infinity
    let sec_max=-Infinity

    let low=Infinity
    let sec_low=Infinity

    for (let i of arr_1){
        if(i>max){
            sec_max=max
            max=i
        }
        else if(i>sec_max && i!=max){
            sec_max =i
        }

        if(i<low){
            sec_low=low
            low=i
        }
        else if(i<sec_low && i!=low){
            sec_low=i
        }
        
    }
    return{ secondMax :sec_max , secondLow:sec_low}
}
let output= calculate([1,99,87,34,56,23,64,78])
console.log(output);


