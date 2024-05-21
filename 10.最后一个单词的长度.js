/**
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
  单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

  输入：s = "Hello World"
  输出：5
  解释：最后一个单词是“World”，长度为5。

  输入：s = "   fly me   to   the moon  "
  输出：4
  解释：最后一个单词是“moon”，长度为4。

  输入：s = "luffy is still joyboy"
  输出：6
  解释：最后一个单词是长度为6的“joyboy”。
 */


const lengthOfLastWord3 = (str) => {
  const trimStr = str.trim()
  for (let j = trimStr.length - 1; j >= 0; j--) {
    if (trimStr[j] === ' ') {
      return trimStr.length - j - 1
    }
  }
}


/**
 * 时间复杂度：O(n)，其中 n 是字符串的长度。最多需要反向遍历字符串一次。
 * 空间复杂度：O(1)。
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = function(str) {
  const s = str.trim()
  const arr = s.split(' ')
  return arr[arr.length -1].length
};


/**
 * 时间复杂度：O(n)，其中 n 是字符串的长度。最多需要反向遍历字符串一次。
 * 空间复杂度：O(1)。
 */
var lengthOfLastWord2 = function(str) {
  let index = str.length - 1
  while (str[index] === ' ') {
    index--
  }

  let number = 0

  for (let i = index; i > 0; i--) {
    if (i === 0 || str[i] === ' ') {
      return number
    }
    number++
  }
  return number
};

console.log(lengthOfLastWord1('Hello World'))
console.log(lengthOfLastWord1('   fly me   to   the moon  '))
console.log(lengthOfLastWord1('luffy is still joyboy'))

console.log('---------------')

console.log(lengthOfLastWord2('Hello World'))
console.log(lengthOfLastWord2('   fly me   to   the moon  '))
console.log(lengthOfLastWord2('luffy is still joyboy'))

console.log('---------------')

console.log(lengthOfLastWord3('Hello World'))
console.log(lengthOfLastWord3('   fly me   to   the moon  '))
console.log(lengthOfLastWord3('luffy is still joyboy'))