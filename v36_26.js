// Write a function to convert a string from snake_case to camelCase.


let convert =(str) => {
    let convo = str.split('_')
    let frst_word = convo[0]

    for(let i =1 ;i<convo.length;i++){
        frst_word += convo[i].charAt(0).toUpperCase()+convo[i].slice(1)
    }

    return frst_word
}

let inp_str = convert("this_is_js_example")
console.log(inp_str);
