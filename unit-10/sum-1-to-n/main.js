function getSum(number) {
    if (typeof(number) !== 'number' || number <= 0 || number > 30) {
        return 'data khong hop le'
    } 
    let sum = 0
    for (let i =1; i <= number; i++) {
        sum += i
    }
    console.log(sum);
}