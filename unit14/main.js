// const getcurrentTime = () => {
//     let 
// }

// bài 2

function checkAcount(event) {
    const value = event.target.value
    const regex = /^[a-z0-9_]+$/g
    const match = regex.test(value)
}

// bài 3

const checkNumber = event => {
    let value  = event.target.value
    const regex = /^[0-9\.]$/
    const match = regex.test(value)

    if (!regex.test(value)) {
        event.target.value = value.replace(/[^0-9\.]+$/, '')
    }

    value = event.target.value
    if (Number(value) > 1000) {
        alert('không được nhập quá 1000')
    }
}

// bài 5:
// sử dụng window.getSelection()...

// bài 6: Unexpected

function onChange(event) {
    let fruits = event.target.value
    alert(fruits)
}

// hàm getElementById('') lấy id của thẻ
// hàm getElementsByClassName('') lấy class
//hàm querySelector(a[target="...."]) sử dụng để lấy tất cả trường hợp id, class, target nhưng hàm chỉ lấy được 1 phần tử đầu tiền nó tìm thấy
// document.querySelector(a[target="...."])

// document.querySelector

window.onload = () => { // hàm dùng đẻ thực hiện load hêt trang html thì javascript mới bắt đầu chạy
    const amount = document.getElementById("amount")
    amount.addEventListener("keyup", checkNumber )

    setTimeout(() => { // thục hiện đặt thời gian để remove hàm được gọi (checkNumber)
        amount.removeEventListener('keyup', checkNumber)
    }, 1000)
}

    // event.preventDefault()

 function resizeClick(event) {
    event.preventDefault()
    const currentSize = event.target.style.fontSize
    event.target.setAttribute('style', 'font-size: 40px;')
    if (currentSize === '40px') {
        event.target.setAttribute('style', 'font-size: 20px;')
    }
    else {
        event.target.setAttribute('style', 'font-size: 40px;')
    }
 }

//  document.innerText dùng để lấy text trong thẻ

