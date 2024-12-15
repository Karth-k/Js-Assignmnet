// Filter numeric palindromes from the input array

let emp_arr=[]
let inp_arr=[1,23,545,676,898,"aba","god"]


for(let i of inp_arr){
    let con_str=i.toString()
    let rev_str=con_str.split('').reverse('').join('')
    if(con_str==rev_str){
        emp_arr.push(i)
    }    
}
console.log(emp_arr);



