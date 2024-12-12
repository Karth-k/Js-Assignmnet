let array = ['abj', 'ncv', 'kldm', 'alks']

for (let i = 0; i < array.length; i++) {
    let word = array[i]
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    array[i] = capitalizedWord
}

console.log(array)


let arra_1 = ['abj', 'ncv', 'kldm', 'alks']

for (let i = 0; i < arra_1.length; i++) {
    let word_1 = arra_1[i]
    if (word_1.length > 2) {
        let middle = word_1.slice(1, -1).toUpperCase();
        arra_1[i] = word_1.charAt(0) + middle + word_1.charAt(word_1.length - 1);
    }
}

console.log(arra_1)





let array_1 = ['abj', 'ncv', 'kldm', 'alks']

for (let i = 0; i < array_1.length; i++) {
    let word = array_1[i]
    if (word.length > 0) {
        let lastLetter = word[word.length - 1].toUpperCase()
        array_1[i] = word.slice(0, -1) + lastLetter
    }
}

console.log(array_1)

