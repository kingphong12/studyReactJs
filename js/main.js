function input(a) {
    // for(let i = 1; i <= a ; i ++) {
    //     if (i % 2 === 0) {
    //         console.log(i);
    //     }
    // }
    let i = 0;
    while (i <=a) {
        console.log(i);
        i += 2
    }
}
function cal(number) {
    let numberOdd = 0
    let numberoven = 0
    for (let i = 1; i <= number; i++) {
        if (!(i%2)) {
            numberOdd += i
        }
        else {
            numberoven += i
        }
    }
    console.log(numberOdd);
    console.log(numberoven);
}
// funtuon normal

function getSort(point) {
    if (typeof(point) !== 'number' || point < 0 || point > 4) {
        return 'data khong hop le'
    }
        if (point >=0 && point < 2.5) {
            console.log('xếp loại trung yếu');
    }
    else if (point >= 2.5 && point < 3.1) {
        console.log('xếp loại khá');
    }
    else if (point >= 3.2 && point < 3.6) {
        console.log('xếp loại giỏi');
    }
    else {
        console.log('xếp loại xuất sắc');
    }
}

//  Khai bao arrow funtion

// const getSort = (point) => {
// 	if (typeof(point) !== 'number' || point < 0 || point > 4) {
// 			return 'data khong hop le'
// 	}
// 			if (point >= 0 && point < 2.5) {
// 					console.log('xếp loại trung yếu');
// 	}
// 	else if (point >= 2.5 && point < 3.1) {
// 			console.log('xếp loại khá');
// 	}
// 	else if (point >= 3.2 && point < 3.6) {
// 			console.log('xếp loại giỏi');
// 	}
// 	else {
// 			console.log('xếp loại xuất sắc');
// 	}
// }

// function getSum(a, b) {
// 	console.log('params:', arguments);
// }

// // moi du an deu bat dau bang ofject
// const student = {
// 	name: 'truong xuan phong',
// 	age: 16,
// 	class: 'CT-10'
// }

// array
//  const logFruist = () => {
// 	const fruits = ['apple', 'banana','orange']

// 	for (let i = 0; i < fruits.length; i++) {
// 		console.log(fruits[i])
// 	}
//  }
//  khi chay console thi phai them dau nguac don

const logFruist = () => {
	const fruits = ['apple', 'banana','orange']

	const myFution = (fruit, index) => {
		console.log(fruits);
	}
	fruits.forEach(myFution)
 }

//  lap ofject

const loopStudentKeys = () => {
	const student =  {
		name: 'truong xuan phong',
		age: 16,
		class: 'CT-10'
	}
	for (let key in student) {
		console.log(student[key]);
	}
}
