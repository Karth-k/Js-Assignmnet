// Write a deep clone function to 
// create a copy of a nested object or array without any reference to the original.

let deepClone =(arr) => {
    if (arr === null || typeof arr !== 'object') return arr
    if (Array.isArray(arr)) 
        return arr.map(deepClone)
    let result = {}
    for (let key in arr) {
        result[key] = deepClone(arr[key])
    }
    return result
}

let obj = { a: 1, b: { c: 2, d: [3, 4] } }
let clonedObj = deepClone(obj)
console.log(clonedObj)




