// tạo ra một mảng các item cha
// const listItem = document.querySelectorAll('.__list-item-link')
// for (let i = 0; i <= listItem.length; i++) {
// 	listItem[i].addEventListener("click", call )
// }

// function call() {
// 	const listItemChild = document.querySelectorAll('.__list-item__child')
// 		for (let j = 0; j < listItemChild.length; j++) {
// 			listItemChild[j].style.display = 'none'
// 		}

// 		this.children[1].style.display = 'block'
// }
const listItem = document.querySelectorAll('.__list-item-link')
const listItemChild = document.querySelectorAll('.__list-item__child')

listItem.forEach(function(item) {
	item.addEventListener('click', function() {
		
		item.classList.toggle('active')
	})
})