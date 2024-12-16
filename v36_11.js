// Write a function to count repeated characters in a string and print in a string format.

let count= (str) => {
    let obj ={}
    for(let i of str){
        if(obj[i]){
            obj[i]++
        }
        else{
            obj[i] =1
        }

    }
    return obj
}

let inp_str= count("ababjan")
console.log(inp_str);


// not prining in string format 
