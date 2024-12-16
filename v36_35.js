// Write a function to generate the specified pattern.


let pattern = (row)=>{
    let emp_pat =[]
    let current_num =1

    for(let i =1; i<=row ; i++){
        let rows=[]
        for(let j =0;j<i;j++){
            rows.push(current_num++)
        }
        emp_pat.push(rows)
    }
    return emp_pat
}

let ans=pattern(5)
console.log(ans);
