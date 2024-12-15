// Analyze the given input and output, write a program accordingly

//  Input a = [2,3,4,5,3,3,5,2,5,3] and Output [4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 5, 5, 5 ,5, 2, 2]


let inp_arr=[2,3,4,5,3,3,5,2,5,3]
let freq={}
for(let i of inp_arr){
    if(freq[i]){
        freq[i]++
    }
    else{
        freq[i]=1
    }
}

let output=[]

for(let i in freq){
    output.push(...Array(freq[i]).fill(Number(i)))
}
let final_out=[].concat(output)
console.log(final_out);
