// Write a function to check if a given string is a palindrome.

let pal = (str) =>{
    let out_2=str.split('').reverse().join('')
    return str===out_2
}

let out_3=pal("gadag")
console.log(out_3);



