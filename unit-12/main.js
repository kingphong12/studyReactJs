// Học chuỗi
// Tùy thuộc vào bảng mã mà số lượng ký tự khác nhau
//  hàm indexOf có thể thực hiện tìm vị tri index của một phần tử trong
//  mảng hoặc một ký tự trong một chuỗi (chuỗi và mảng thì index  bắt đầu từ
// về tìm hiểu biểu thức chính quy?

r = /^[a-z0-9_]{1,}@\w/g   bắt đầu bằng các kí tử a-z 0-9 

const name = "   nguyễn Văn a   "

const getName = name => {
	name = name.trim()
	while (name.indexOf(' ') !== -1) {
		// name = name.replace('  ', ' ')
		name = name.replace(/ +/g, ' ') //sử dụng biểu thức chính quy (/ +/g, ' ') ý nghĩa là nhiều hơn 1 dấu cách thì sẽ chuyển thành 1 dấu cách 
	}
	return name
}
