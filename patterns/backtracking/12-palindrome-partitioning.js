/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const isPalindrome = str => {
  if (str.length <= 1) {
    return true
  }
  if (str[0] !== str[str.length - 1]) {
    return false
  }
  return isPalindrome(str.slice(1, str.length - 1))
}

const palindromePartitioning = s => {
  const result = []
  const backtrack = (index, curr) => {
    if (index >= s.length) {
      result.push(curr.slice())
    }
    for (let i = index; i < s.length; i++) {
      const sub = s.slice(index, i + 1)
      if (isPalindrome(sub)) {
        curr.push(sub)
        backtrack(i + 1, curr)
        curr.pop()
      }
    }
  }
  backtrack(0, [])
  return result
}

console.log(palindromePartitioning('aab'))
