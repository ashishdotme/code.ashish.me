/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const permutationInString = (s1, s2) => {
  let map = {}
  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = map[s1[i]] + 1 || 1
  }

  let matchCount = {}
  let right = 0
  let left = 0
  while (right < s2.length) {
    matchCount[s2[right]] = matchCount[s2[right]] + 1 || 1
    while (matchCount[s2[right]] > (map[s2[right]] || 0)) {
      matchCount[s2[left]] -= 1
      left += 1
    }
    if (right - left + 1 == s1.length) {
      return true
    }
    right += 1
  }
  return false
}

console.log(permutationInString('ab', 'eidbaooo'))
