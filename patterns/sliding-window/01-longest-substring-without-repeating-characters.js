/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const longestSubstringWithoutRepeatingCharacters = str => {
  let w = new Set()
  let left = 0
  let length = 0
  let max = 1
  for (let right = 0; right < str.length; right++) {
    if (w.has(str[right])) {
      while (w.has(str[right])) {
        w.delete(str[left])
        left += 1
      }
    }
    w.add(str[right])
    length = right - left + 1
    max = Math.max(length, max)
  }
  return max
}

console.log(longestSubstringWithoutRepeatingCharacters('abcabcbb'))

// test('longestSubstringWithoutRepeatingCharacters', () => {
//   expect(longestSubstringWithoutRepeatingCharacters("abcabcbb")).toEqual(3)
// });
