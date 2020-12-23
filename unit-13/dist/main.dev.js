"use strict";

// unit-13
// bài 1: Hãy tạo 1 thẻ div có các event sau:
// Khi di chuột vào thẻ div: console log ra Hover lúc: ${currentTime}
// Trong đó currentTime là thời gian tại thời điểm hover vào theo format DD-MM-YYYY hh:mm:ss
// Vd: Hover lúc 20-12-2020 18:35:26
// Khi di chuột ra khỏi thẻ div: console log ra Out hover lúc ${currentTime}
// currentTime là thời gian hiện tại như mô tả bên trên
var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var datetime = date + " " + time;

function testtime() {
  document.getElementById("curentime").innerHTML = datetime;
  console.log(datetime);
}

function testOutTime() {
  document.getElementById("curentime").innerHTML = datetime;
  console.log(datetime);
} // bài 2: Tạo 1 ô input text nhập account với yêu cầu sau:
// Chỉ cho phép nhập vào các ký tự từ a-z (chữ thường), và các số từ 0-9, và dấu gạch dưới
// Nếu có ký tự không hợp lệ, hãy alert cho người dùng biết cần phải nhập đúng


function getInfo() {
  var flag = document.getElementById("checkInput").value;

  if (!testAcount(flag) || flag === '') {
    alert("thong tin không hơp lệ");
  } else {
    alert("thông tin hợp lệ");
  }
}

function testAcount(flag) {
  var acount = /^([a-z0-9_])/;

  if (acount.test(flag)) {
    return true;
  } else {
    return false;
  }
} // bài 3 
// Tạo 1 ô input number để nhập số tiền
// Các ký tự được phép sử dụng là 0-9
// Số tiền không được phép âm
// Số tiền nhập tối đa là 1000
// Nếu có lỗi hãy alert ra lỗi phù hợp


function checkNumber() {
  //fail
  var num = document.getElementById("checkNum").value;
} // bài 4: Tạo 1 thẻ div
// Khi double click vào thì alert double click


function eventDoubleClick() {
  alert("Double click");
} // bài 6: Hãy Tạo 1 thẻ select có các item sau: apple, orange, banana
// Mỗi lần chọn 1 item nào đó, hãy log ra màn hình console item vừa chọn


function selectItem() {
  // fail
  var arr = document.getElementsByTagName('option');

  if (arr[1].value) {
    alert('apple');
  } else if (arr[2].value) {
    alert('orange');
  } else if (arr[3].value) {
    alert('banana');
  }
}