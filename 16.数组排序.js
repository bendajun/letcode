/* 
1、冒泡排序
  时间复杂度：O(n²)
  空间复杂度：O(1)
*/

const arr = [9, 7, 11, 2, 3, 8, 8, 6, 5, 2, 4, 11, 20, 7, 1];

const sortArr = (arr) => {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 换个位置
      }
    }
  }
  return arr;
};

// console.log(sortArr(arr));


const arr1 = [9, 7, 11, 2, 3, 8, 8, 6, 5, 2, 4, 11, 20, 7, 1];

/* 
  快速排序
  时间复杂度：平均 O(nlogN)
  快速排序的空间复杂度是O(n)，因为它需要一个额外的栈空间来存储递归调用的信息
*/
function quickSortArr(arr) {
  //当进行递归的数组的长度小于等于 1 的时候直接返回该数组
  if (arr.length <= 1) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2); //获取基准数据的下标
  let middleItem = arr.splice(middleIndex, 1)[0]; //截取基准数据
  let leftArr = [];
  let rightArr = [];
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] > middleItem) {
      rightArr.push(arr[k]);
    } else {
      leftArr.push(arr[k]);
    }
  }
  return quickSortArr(leftArr).concat(middleItem, quickSortArr(rightArr)); //将左边数组，基准数据和右边数组进行拼接成一个完整的数组
}

console.log(quickSortArr(arr1), arr1)
