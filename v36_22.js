// Count the occurrences of each unique character in the string


let count = (chr) =>{
    let emp_obj={}
    let con_chr=chr.toLowerCase()
    for(let i of con_chr){
        if(emp_obj[i]){
            emp_obj[i]++
        }
        else{
            emp_obj[i]= 1
        }
    }
    return emp_obj

}

let inp_str=count("Heyy Karthik")
console.log(inp_str);
