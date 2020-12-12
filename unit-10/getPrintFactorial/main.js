function getPrintFactorial(number) {
    if (typeof(number) !== 'number' || number <= 0 || number > 30) {
        return 'data khong hop le'
    }
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    console.log(factorial);
}