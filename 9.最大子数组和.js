/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
  let pre = 0;
  let maxAns = nums[0];
  nums.forEach(item => {
    pre = Math.max(pre + item, item);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray1([1]))
console.log(maxSubArray1([5, 4, -1, 7, 8]))
console.log(maxSubArray1([-1, -2, -3]))