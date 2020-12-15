// const student = {
// 	id: 1,
// 	name: 'nguyen van A',
// }

// const score = {
// 	music: 2.9,
// 	math: 8.3
// }

// student.score = score

// score.music = 7.5

// const student = {

// }

// const score = {}
//  let season1 = {music: 8.3, math: 8}
//  const season2 = {
// 	 music: 9,
// 	 math: 4.5
//  }
//  student.score = score
//  score.season1 = season1
//  score.season2 = season2

// const fruits = ['apple', 'orange']

// // them phan tu vao cuoi mang
// fruits.push('chery')
// console.log('them phan tu cuoi mang',fruits);
// fruits.unshift('kiwi')
// console.log('them phan tu vao dau mang',fruits);

// array = fruits.splice(1,2)

// const student = {
// 	id: 1,
// 	name: 'nguyen van A'
// }
// const studenInT3h = {
// 	className: 'reactJs',
// 	schedule: '2-cn'
// }
// for (let key in studentInT3h) {
// 	student(key) = studenInT3h(key)
// }
// const student = {
// 	id: 1,
// 	name: 'nguyen van A',
// 	className: 'reactJs',
// 	schedule: '2-cn',
// 	score: {
// 		s1: {
// 			music: 8.2,
// 			math: 8
// 		},
// 		s2: {
// 			music: 6,
// 			math: 7
// 		}
// 	}
// }

// bài 1: lặp phần tử (pass)


function arrayRepeatElement(str, number) {
	let array = []
	if (typeof(str) !== 'string') {
		return 'data khong hop le'
	}
	else {
		for (let i = 0; i < number; i++) {
			array.push(str)
		}
		console.log(array);
	}
}
// making 2
function arrayRepeatElement(str, number) {
	let array = []
	if (typeof(str) !== 'string') {
		return 'data khong hop le'
	}
	else {
		for (let i = 0; i < number; i++) {
			array.splice(i, 0, str)
		}
		console.log(array);
	}
}

// bai 2 dao nguoc 1 mang (pass)

function reverseArray() {
	const array = ['1', '3', '2', '5', '4', '7']
	let right
	let left

		for (let i = 0; i < array.length/2; i++) {
			temp = array[i]
			array[i] = array[(array.length-1)-i]
			array[(array.length-1)-i] = temp
		}
		console.log(array);
}

// bài 3: Xóa đi các phần tử được xem là sai (fail)

function removeElement() {
	const arrayInput = [0, 1, false, 2, undefined, '', 3, null]

	function test(itemValue) {
	//  return itemValue !== 0 && typeof(itemValue) === 'number' || itemValue !== false && typeof(itemValue) === 'number' || itemValue !== undefined || itemValue !== ''
	if (itemValue === false || itemValue === undefined || itemValue === "") {
		itemValue = 0
		return itemValue !== 0
	}
	}
	console.log(arrayInput.filter(test));
}

// bài 5: sắp xếp mảng theo thứ tự tăng dần (pass)

const arrayInputSort = [6, 4, 0, 3, -2, 1]
const arrayOutputSort = arrayInputSort.sort()
console.log(arrayOutputSort);

// bài 6: Kiểm tra đầu vào có phải là một object hay không? (pass)

const data = {a: 1}
// const data = ['1', '2']
const isObject = input => {
	return !!input && input.constructor === Object;
  };
