// Analyze the given input and output, write a program accordingly
//  Input a = [2,3,4,5,3,3,5,2,5,3] and Output [ 5, 5, 5, 4, 3, 3, 3, 3, 2, 2]

let a = [2, 3, 4, 5, 3, 3, 5, 2, 5, 3]

for (let i = 0 ;i < a.length - 1 ;i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
        if (a[j] < a[j + 1]) {
            let temp = a[j]
            a[j] = a[j + 1]
            a[j + 1] = temp
        }
    }
}

console.log(a)
