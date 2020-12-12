function getPrintOven(number) {
    if (typeof(number) !== 'number' || number <= 0 || number > 30) {
        return 'data khong hop le'
    }
    
    for (let i = 2; i <=number; i+= 2) {
        console.log(i);
    }
}