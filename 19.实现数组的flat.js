const arrayFlat = (arr, deep = 1) => {
  if (deep === 0) return arr
  return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? arrayFlat(cur, deep - 1) : cur) , [])
}


console.log(arrayFlat([1, 2, 3, [4, [5, 6]]]))
console.log(arrayFlat([1, 2, 3, [4, [5, 6]]], 2))
// [1, 2, 3, 4, [5, 6]]
// [1, 2, 3, 4, 5, 6]
