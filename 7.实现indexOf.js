/**
 * 实现js字符串的indexOf内置函数
 * 输入：haystack = "hello", needle = "ll"  输出：2
 * 输入：haystack = "aaaaa", needle = "bba" 输出：-1
 * 输入：haystack = "", needle = "" 输出：0
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr1 = function (haystack, needle) {
  return haystack.indexOf(needle)
};

/**
 * 时间复杂度：O(n)，其中 n 是 haystack 的长度。
 * 空间复杂度：O(1)。只需要使用常数的额外空间。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function (haystack, needle) {
  if (haystack === '' || needle === '') return 0
  let res = -1
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack.slice(i, i + needle.length) === needle) {
      res = i
      return res
    }
  }
  return res
};

const strStr3 = (str, target) => {
  for (let i = 0; i <= str.length; i++) {
    if (str.slice(i, i + target.length) === target) {
      return i
    }
  }

  return -1
}

/**---------------------------
  * 时间复杂度：O(n×m)，其中 n 是字符串 haystack 的长度，m 是字符串 needle 的长度。
  * 最坏情况下我们需要将字符串 needle 与字符串 haystack 的所有长度为 m 的子串均匹配一次。
  * 空间复杂度：O(1)。我们只需要常数的空间保存若干变量。
 * 
 * @param {*} haystack 
 * @param {*} needle 
 * @returns 
 */
var strStr4 = function (haystack, needle) {
  const n = haystack.length
  const m = needle.length
  for (let i = 0; i + m <= n; i++) {
    let res = true
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        res = false
        break
      }
    }
    if (res) {
      return i
    }
  }
  return -1
};

console.log(strStr1('hello', 'll'))
console.log(strStr1('aaaaa', 'bba'))
console.log(strStr1('', ''))
console.log('---')
console.log(strStr2('hello', 'll'))
console.log(strStr2('aaaaa', 'bba'))
console.log(strStr2('', ''))
console.log('---')
console.log(strStr3('hello', 'll'))
console.log(strStr3('aaaaa', 'bba'))
console.log(strStr3('', ''))
console.log('---')
console.log(strStr4('hello', 'll'))
console.log(strStr4('aaaaa', 'bba'))
console.log(strStr4('', ''))