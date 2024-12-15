// Write a function to remove duplicate characters in a string.


let duplicate = (str)=>{
    let new_str=""
    for(let i of str){
        let isduplicate =false
        for(let j of new_str){
            if(i==j){
                isduplicate=true
                break
            }
        }
        if(!isduplicate){
            new_str+=i
        }
  
    }
    return new_str
}

let inp_str=duplicate("kaaaaarrrthik")
console.log(inp_str);
