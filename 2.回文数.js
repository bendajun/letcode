/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 例如，121 是回文，而 123 不是。1221是
 */

/** 自己的解法
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  return x === Number(String(x).split('').reverse().join(''))
};


/** 自己的解法
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome2 = function (x) {
  const str = String(x)
  const middleIndex = Math.floor(str.length / 2)
  for (let i = 0; i < middleIndex; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false
    }
  }

  return true
};

console.log(isPalindrome2(-121))
console.log(isPalindrome2(2))
console.log(isPalindrome2(123))
console.log(isPalindrome2(121))
console.log(isPalindrome2(1221))
