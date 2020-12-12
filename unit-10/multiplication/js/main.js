function multiplication(number) {
   
    if (typeof(number) !== 'number') {
        return 'data khong hop le'
    }
    console.log("In bang nhan:");
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number*i}`);
    }
}
// arrow funtiuon
const mult = (number) => {console.log(typeof(number));
    if (typeof(number) !== 'number') {
        return 'data khong hop le'
    }
    console.log('In ra bang nhan:');
    for (let j = 1; j <= 10; j++) {
        console.log(`${number} x ${j} = ${number*j}`);
    }
}