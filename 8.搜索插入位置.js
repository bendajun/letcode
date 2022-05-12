/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 输入: nums = [1,3,5,6], target = 5 输出: 2
 * 输入: nums = [1,3,5,6], target = 2 输出: 1
 * 输入: nums = [1,3,5,6], target = 7 输出: 4
 * 输入: nums = [1,3,5,6], target = 0 输出: 0
 * 输入: nums = [1], target = 0 输出: 0
 */

/** 
 * 时间复杂度：O(n)，其中 n 是数组的长度。
 * 空间复杂度：O(1)。只需要使用常数的额外空间。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const cur = nums[i]
    const next = nums[i + 1]
    if (target < cur) {
      nums.splice(i, 1, target, cur)
      return i
    }
    if (target === cur) return i
    if (next === undefined) {
      nums[len] = target
      return len
    }
  }
};

/**
 * 时间复杂度：O(logn)，其中 n 为数组的长度。二分查找所需的时间复杂度为 O(logn)。
 * 空间复杂度：O(1)。只需要使用常数的额外空间。
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var searchInsert2 = function (nums, target) { // [1, 3, 5, 6], 2
  let left = 0;
  let right = nums.length - 1;
  let mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  if (nums[mid] > target) {
    return mid;
  } else {
    return mid + 1;
  }
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1], 0))
console.log('---')
console.log(searchInsert2([1, 3, 5, 6], 5))
console.log(searchInsert2([1, 3, 5, 6], 2))
console.log(searchInsert2([1, 3, 5, 6], 7))
console.log(searchInsert2([1, 3, 5, 6], 0))
console.log(searchInsert2([1], 0))