// Write a program to find the count of the maximum prefix and suffix that are the same in a given string.

let inp_str="abacab"
let max_length=0
let n=inp_str.length

for(let i=1;i<n/2;i++){
    let prefix=  inp_str.substring(0,i)
    let suffix= inp_str.substring(n-i)
        if(prefix==suffix){
            max_length=i
        }
}
console.log(max_length);
