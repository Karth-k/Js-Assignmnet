// Write a function to reverse a string without using built-in methods.

 let reverse = (str) => {
    let reverse_str=''
    for(let i =str.length-1;i>=0;i--)
    {
        reverse_str +=str[i ]
    }
    return reverse_str
 }
 let inp_str = reverse("karthik")
 console.log(inp_str);
 