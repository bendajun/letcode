/**
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"

 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 */

/**
 * 时间复杂度：O(n)，其中 n 是字符串的a or b长度。
 * 空间复杂度：O(1)。
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const res = []
  let c = 0
  let [i, j] = [a.length - 1, b.length -1]
  while (i >= 0 || j >= 0 || c) {
    const aa = Number(a[i]) ? Number(a[i]) : 0
    const bb = Number(b[j]) ? Number(b[j]) : 0
    let sum = aa + bb + c
    if (sum === 3) {
        sum = 1
        c = 1
    } else if (sum === 2) {
        sum = 0
        c = 1
    } else {
        c = 0
    }
    res.unshift(sum)
    i--
    j--
  }
  return res.join('')
};

console.log(addBinary('11', '1'))

console.log(addBinary('1010', '1011'))

