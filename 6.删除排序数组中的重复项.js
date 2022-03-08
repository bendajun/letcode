/**
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，
 * 使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 */

/**
 * 时间复杂度：O(n)，其中 n 是数组的长度。
 * 空间复杂度：O(1)。只需要使用常数的额外空间。
 * @param {*} nums 
 * @returns 
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};

/**
 * 时间复杂度：O(n)，其中 n 是数组的长度。
 * 空间复杂度：O(1)。只需要使用常数的额外空间。
 * @param {*} nums 
 * @returns 
 */
var removeDuplicates2 = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;

  let fast = 1, slow = 1;
  while (fast < n) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }

  return slow;
};

console.log(removeDuplicates([1, 1, 2, 3, 3, 6, 7, 7, 7, 8, 9, 9]))
console.log(removeDuplicates2([1, 1, 2, 3, 3, 6, 7, 7, 7, 8, 9, 9]))