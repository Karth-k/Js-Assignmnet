// Write a function to calculate the sum of total marks in an array of objects.

let total = (arr)=>{
    let ans =0
    arr.forEach(student=> {
        if(student.marks  && typeof student.marks=== 'number'){
            ans += student.marks
        }

        })
        return ans
}

let students= [
    {name:'karthik', marks:50},
    {name:'arun', marks: 50},
    {name:'sathvik', marks: 50}
]

let totalMarks = total(students)
console.log(totalMarks);
