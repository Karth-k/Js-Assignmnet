// function findSecondLargestInNestedArray(nestedArray) {
//     let allNumbers = []
//     for (let i = 0; i < nestedArray.length; i++) {
//         for (let j = 0; j < nestedArray[i].length; j++) {
//             allNumbers.push(nestedArray[i][j])
//         }
//     }
//     let largest = -Infinity
//     let secondLargest = -Infinity

//     for (let i = 0; i < allNumbers.length; i++) {
//         if (allNumbers[i] > largest) {
//             secondLargest = largest
//             largest = allNumbers[i]
//         }
//          else if (allNumbers[i] > secondLargest && allNumbers[i] < largest) {
//             secondLargest = allNumbers[i]
//         }
      
//     }
    
//     return (largest,secondLargest)
// }
// let nestedArray = [[3, 5, 7], [2, 8], [6, 1, 9]]
// let result = findSecondLargestInNestedArray(nestedArray)
// console.log("Largest:" result.largest)
// console.log("Largest:" result.secondLargest)        




function findLargestAndSecondLargestInNestedArray(nestedArray) {
    let allNumbers = []

    for (let i = 0; i < nestedArray.length; i++) {
        for (let j = 0; j < nestedArray[i].length; j++) {
            allNumbers.push(nestedArray[i][j])
        }
    }
    let largest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < allNumbers.length; i++) {
        if (allNumbers[i] > largest) {
            secondLargest = largest
            largest = allNumbers[i]
        } else if (allNumbers[i] > secondLargest && allNumbers[i] < largest) {
            secondLargest = allNumbers[i]
        }
    }

    return { largest, secondLargest }
}

let nestedArray = [[3, 5, 7], [2, 8], [6, 1, 9]];
let result = findLargestAndSecondLargestInNestedArray(nestedArray)
console.log("Largest:", result.largest)
console.log("Second Largest:", result.secondLargest)
