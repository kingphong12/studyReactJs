
const getArray = () => {
 
   const numberArray = ['2', '3', '5', '6', '8', '10', '0']
    let index = 0
    for (let i = 0; i < numberArray.length; i++) {
        if (!(numberArray[i]%2)) {
            index++
        }
    }
  console.log(index);
 }