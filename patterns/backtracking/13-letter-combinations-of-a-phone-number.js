/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const letterCombinationsOfAPhoneNumber = digits => {
  if (digits.length < 1) {
    return []
  }
  let result = []
  let map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }
  const backtrack = (index, curr) => {
    if (curr.length == digits.length) {
      result.push(curr.join(''))
      return
    }
    const possibleCombincation = map[digits[index]]
    for (let i = 0; i < possibleCombincation.length; i++) {
      curr.push(possibleCombincation[i])
      backtrack(index + 1, curr)
      curr.pop()
    }
  }
  backtrack(0, [])
  return result
}

console.log(letterCombinationsOfAPhoneNumber('23'))
