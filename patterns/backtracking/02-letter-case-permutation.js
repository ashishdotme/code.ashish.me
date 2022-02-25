/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const letterCasePermutation = val => {
  const result = []
  const backtrack = (index, combination) => {
    if (index === val.length) {
      result.push(combination)
      return
    }
    backtrack(index + 1, combination + val[index])
    if (val.charCodeAt(index) >= 'a'.charCodeAt(0) && val.charCodeAt(index) <= 'z'.charCodeAt(0)) {
      backtrack(index + 1, combination + val[index].toUpperCase())
    }
    if (val.charCodeAt(index) >= 'A'.charCodeAt(0) && val.charCodeAt(index) <= 'Z'.charCodeAt(0)) {
      backtrack(index + 1, combination + val[index].toLowerCase())
    }
  }
  backtrack(0, '')
  return result
}

console.log(letterCasePermutation('a1b2'))
