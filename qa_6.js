function fibonacciSeries(n) {
    let a = 0, b = 1

    for (let i = 0; i < n; i++) {
        console.log(a)
        let next = a + b
        a = b
        b = next
    }
}
let n = 10
fibonacciSeries(n)
