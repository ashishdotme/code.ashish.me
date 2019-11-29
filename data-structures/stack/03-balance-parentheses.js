/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: ashish.me
 *
 */

 const OPENING = '{(['
 const CLOSING = '})]'

function peek(stack) {
  return stack[stack.length - 1]
}

function balanceParentheses(str) {
  let stack = []
  for (let index = 0; index < str.length; index++) {
    const letter = str.charAt(index)
    if (OPENING.includes(letter)) {
      stack.push(letter)
    } else if (CLOSING.includes(letter)) {
      if (stack.length === 0) {
        return false
      } else if (peek(stack) === '(') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

test.only('balance Parentheses', () => {
  expect(balanceParentheses('({Ashish})')).toEqual(true)
})
