const arr1 = [1, 1, 1, 3, 7, 9, 10, 20,  11, 44, 66, 99, 99, 88, 1, 20]

const uniqueArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
}
// uniqueArr(arr)
// console.log(arr)

const arr2 = [1, 1, 1, 3, 7, 9, 10, 20,  11, 44, 66, 99, 99, 88, 1, 20]

const uniqueArr2 =  (arr) => {
  const res = []
  for (const item of arr) {
    if (!res.includes(item)) {
      res.push(item)
    }
  }

  return res
}

console.log(uniqueArr2(arr2))


const uniqueArr3 = (arr) => {
  return [...new Set(arr)]
}





const arr3 = [1, 1, 1, 3, 7, 9, 10, 20,  11, 44, 66, 99, 99, 88, 1, 20]

const newArr = arr3.filter((item, index) => arr3.indexOf(item) === index)

console.log(newArr)

