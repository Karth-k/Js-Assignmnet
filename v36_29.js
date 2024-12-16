// Write a function to capitalize the first letter of each word in an array of strings.

let capitalize = (arr)=>{
    return arr.map((letter,index)=>{
        if(typeof letter ==='string'){
        letter[index]=letter.charAt(0).toUpperCase()+letter.slice(1)
    }
})

}
let words =['hello','heyy','karthik']
let answer=capitalize(words)
console.log(answer);
