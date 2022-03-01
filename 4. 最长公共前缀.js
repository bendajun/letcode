/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ''。
 * 输入：strs = ['flower','flow','flight'] 输出：'fl'
 * 输入：strs = ['dog','racecar','car'] 输出：''
 **/
 
 /** 
 * 时间复杂度：O(mn)，其中 m 是字符串数组中的字符串的平均长度，n 是字符串的数量。
 *   最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。
 * 空间复杂度：O(1)。使用的额外空间复杂度为常数。
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let res = ''
  let firstItem = strs[0]
  for (let i = 0; i < firstItem.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== firstItem[i]) return res
    }
    res += firstItem[i]
  }
  return res
}

console.log(longestCommonPrefix(['flower','flow','flight']))
console.log(longestCommonPrefix(['dog','racecar','car']))