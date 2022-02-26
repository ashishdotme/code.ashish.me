/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const generateParentheses = n => {
  const result = []
  const backtrack = (curr, left, right) => {
    if (left == 0 && right == 0) {
      result.push(curr)
      return
    }
    if (left > 0) {
      backtrack(curr + '(', left - 1, right)
    }
    if (right > left) {
      backtrack(curr + ')', left, right - 1)
    }
  }
  backtrack('', n, n)
  return result
}

console.log(generateParentheses(3))
