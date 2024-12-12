function factorial(n) {
    if (n === 0) return 1

    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }

    return result;
}
let n = 5
let result = factorial(n)
console.log(`Factorial of ${n} is ${result}`)
