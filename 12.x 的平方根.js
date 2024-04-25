/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
  由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
  注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

  输入：x = 4
  输出：2

  输入：x = 8
  输出：2
  解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 */

/**
 * 时间复杂度：O(logx)，即为二分查找需要的次数
 * 空间复杂度：O(1)。
 * @param {*} x 
 * @returns 
 */
const fn = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i * i === num) return i
    if (i * i > num) return i - 1
  }
}

console.log(fn(0))

console.log(fn(2))

console.log(fn(4))

console.log(fn(8))

console.log(fn(9))

console.log(fn(24))