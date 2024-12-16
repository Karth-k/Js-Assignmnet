// Write a function to remove duplicate elements from an array without using default functions.


let dupl = (arr_1)=>{
    let new_arr=[]
    for(let i of arr_1){
        let isDuplicate=false
        for(let j of new_arr){
            if(i==j){
                isDuplicate=true
                break
            }
        }    
        if(!isDuplicate){
            new_arr+= i
        }
    }
    return new_arr

}
let inp_arr=dupl([1,2,3,3,2,1,4,5,3,4,9])
console.log(`The New Array is ${inp_arr}`);


// let arr_1=[1,2,2,3,4,3,1,7,8]
// let new_arr=[ ]

// for(let i of arr_1){
//     let isDuplicate=false
//     for(let j of new_arr){
//         if( i==j){
//             isDuplicate=true
//             break
//         }
//     }
//         if(!isDuplicate){
//             new_arr += i
//         }
// }
// console.log(new_arr);
