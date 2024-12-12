let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 23, 12, 43]

for (let i = 0; i < array.length; i++) {
    let str = array[i].toString()
    let formattedStr = ''
    let count = 0

    for (let j = str.length - 1; j >= 0; j--) {
        formattedStr = str[j] + formattedStr;
        count++
        if (count % 3 === 0 && j !== 0) {
            formattedStr = '0' + formattedStr
        }
    }

    array[i] = formattedStr
}

console.log(array)
