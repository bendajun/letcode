/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
  有效字符串需满足：
    左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。

  示例 1：
  输入：s = '()'
  输出：true

  示例 2：
  输入：s = '()[]{}'
  输出：true

  示例 3：
  输入：s = '(]'
  输出：false

  示例 4：
  输入：s = '([)]'
  输出：false

  示例 5：
  输入：s = '{[]}'
  输出：true
 */

/**
 * 时间复杂度：O(n)，其中 n 是字符串 s 的长度。
 * @param {string} str
 * @return {boolean}
 */
const isValid = function (s) { // []{}
  const stack = []
  const map = {
    '[': ']',
    '{': '}',
    '(': ')'
  }

  for (const item of str) {
    if (item in map) {
      stack.push(item)
      continue
    }

    if (map[stack.pop()] !== item) return false
  }

  return stack.length === 0
}

console.log(isValid('()[]{}'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
