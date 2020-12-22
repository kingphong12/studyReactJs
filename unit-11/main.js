
// bài 1: lặp phần tử (pass)

// const { map } = require("jquery")

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


// unit -12 -

// bài 1: Hãy viết 1 hàm nhập vào 2 array, kiểm tra xem 2 array có khớp 100% các value với nhau về cả giá trị và index không

const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 5]
const arr4 = [1, 2, 3, 4, 5]

const testElement = (item) => {
	arr1.map(item) === arr2.map(item)
	return true
	return false
}


var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;



// unit-13
// bài 1: Hãy tạo 1 thẻ div có các event sau:

// Khi di chuột vào thẻ div: console log ra Hover lúc: ${currentTime}

// Trong đó currentTime là thời gian tại thời điểm hover vào theo format DD-MM-YYYY hh:mm:ss
// Vd: Hover lúc 20-12-2020 18:35:26
// Khi di chuột ra khỏi thẻ div: console log ra Out hover lúc ${currentTime}

// currentTime là thời gian hiện tại như mô tả bên trên
let today = new Date()
let date = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear()
let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
let datetime = date + " " + time
function testtime() {
	document.getElementById("curentime").innerHTML = datetime
	console.log(datetime);
}

function testOutTime() {
	document.getElementById("curentime").innerHTML = datetime
	console.log(datetime);
}

// bài 2: Tạo 1 ô input text nhập account với yêu cầu sau:
// Chỉ cho phép nhập vào các ký tự từ a-z (chữ thường), và các số từ 0-9, và dấu gạch dưới
// Nếu có ký tự không hợp lệ, hãy alert cho người dùng biết cần phải nhập đúng

function getInfo() {
	let flag = document.getElementById("checkInput").value
	if (!testAcount(flag) || flag === '') {
		alert("thong tin không hơp lệ")
	}
	else {
		alert("thông tin hợp lệ")
	}
}

function testAcount(flag) {
	let acount = /^([a-z0-9_])/
	if (acount.test(flag)) {
		return true
	}
	else {
		return false
	}
}

// bài 3 
// Tạo 1 ô input number để nhập số tiền
// Các ký tự được phép sử dụng là 0-9
// Số tiền không được phép âm
// Số tiền nhập tối đa là 1000
// Nếu có lỗi hãy alert ra lỗi phù hợp

function checkNumber() {
	let num = document.getElementById("checkNum").value

	
}

// bài 4: Tạo 1 thẻ div
// Khi double click vào thì alert double click

function eventDoubleClick() {
	alert("Double click")
}

// bài 6: Hãy Tạo 1 thẻ select có các item sau: apple, orange, banana
// Mỗi lần chọn 1 item nào đó, hãy log ra màn hình console item vừa chọn

function selectItem() {
	let arr = document.getElementsByTagName('option')
	if (arr[1].value) {
		alert('apple')
	}
	if (arr[2].value) {
		alert('orange')
	}
	if (arr[3].value) {
		alert('banana')
	}
}