
// bài 1: lặp phần tử (pass)

function arrayRepeatElement(str, number) {
	const array = []
	if (typeof(str) !== 'string') {
		return 'data khong hop le'
	}
	else {
		for (let i = 0; i < number; i++) {
			array.push(str)
		}
		console.log(array)
	}
}

// making 2

function arrayRepeatElement(str, number) {
	const array = []
	if (typeof(str) !== 'string') {
		return 'data khong hop le'
	}
	else {
		for (let i = 0; i < number; i++) {
			array.splice(i, 0, str)
		}
		console.log(array)
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
	console.log(array)
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
console.log(arrayOutputSort)

// bài 6: Kiểm tra đầu vào có phải là một object hay không? (pass)

const data = {a: 1}
// const data = ['1', '2']
const isObject = input => {
	return !!input && input.constructor === Object
}

// Bài 9: Viết hàm nhập vào 1 array có cấu trúc như ví dụ sau:

const students = [
	{ id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
	{ id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
	{ id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
	{ id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
	{ id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
	{ id: 6, name: 'Phí Duy Quân', score: 9.6 },
	{ id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

// Hãy tạo 1 array mới, với cấu trúc sau:

// ['Pass', 'Fail', 'Fail', 'Pass', 'Pass', 'Fail', 'Pass']
// Điều kiện Pass:

// Điểm trên 5.0 và không có chữ Duy là tên đệm

const array =	students.map(item => { //hàm map() duyệt các phần tử trong mảng (item) trả về một mảng mới mà không làm thay đổi mảng cũ
		if (item.score >= 5.0 && item.name.indexOf(' Duy ') === -1) {
			return item = 'pass'
		}
		else {
			return item = 'fail'
		}
	})

	// bài 10: 
