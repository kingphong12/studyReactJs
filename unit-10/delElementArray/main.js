
const delElementArray = () => {
	let array = ['A', 'C', 'A', 'A', 'B', 'D', 'B', 'D']
	let array2 = []

	// let array = ['A', 'C', 'B', 'C', 'D', 'E', 'F', 'G']

	for (let i = 0; i < array.length; i++) {
		let array = ['A', 'C', 'A', 'A', 'B', 'D', 'B', 'D']
		for (let j = i + 1; j <= array.length; j++) {
			
			if (array[i] === array[j]) {
				array.splice(array[j],1)
				array2 = array
				console.log('day arrray sau khi gan', array2);
			}
		}
	}
}
