// let arr_1=[10,20,40,60,90]

// let high=-Infinity
// let low=-Infinity

// for(let i of arr_1){
//     if(i>high){
//         low=high
//         high=i
        
//     }
//     else if (i>low && i!=high){
//         low=i
//     }
    
// }
// console.log(`The Maximum number is ${high}`);
//     console.log(`The Second Highest is ${low}`);



    let arr_1=[10,20,40,60,-90]

    let low=Infinity
    let sec_low=Infinity
    
    for(let i of arr_1){
        if(i<low){
            sec_low=low
            low=i
            
        }
        else if (i<sec_low && i!=low){
            sec_low=i
        }
        
    }
    console.log(`The Lowest number is ${low}`);
        console.log(`The Second Lowest is ${sec_low}`)
    