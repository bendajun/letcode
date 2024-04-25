/** 
 * 给定一个整数数组 nums 和一个整数目标值 target ，在数组中找出和为目标值target的那两个整数，返回两个整数的数组下标
 * 自己的解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度：O(N^2)，其中 N 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次。
 * 空间复杂度：O(1)
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}


/** 较好的解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度：O(N)，其中 N 是数组中的元素数量。对于每一个元素 x，我们可以 O(1) 地寻找 target - x。
 * 空间复杂度：O(N)，其中 N 是数组中的元素数量。主要为哈希表的开销。
 */
const twoSum2 = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i]
    if (map.has(x)) {
      return [map.get(x), i]
    }
    map.set(nums[i], i)
  }
}

const arr = [7, 9, 4, 3, 5, 11]
const target = 9

console.log(twoSum(arr, target))
console.log(twoSum2(arr, target))