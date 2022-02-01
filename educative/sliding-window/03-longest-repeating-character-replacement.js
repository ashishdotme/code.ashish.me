/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const longestRepeatingCharacterReplacement = (s, k) => {
  let left = 0
  let result = 0
  let map = {}
  let maxFrequency = 0
  for (let right = 0; right < s.length; right++) {
    map[s[right]] = map[s[right]] + 1 || 1
    maxFrequency = Math.max(maxFrequency, map[s[right]])
    while (right - left + 1 - maxFrequency > k) {
      map[s[left]] -= 1
      left += 1
    }
    result = Math.max(result, right - left + 1)
  }
  return result
}

test('longestRepeatingCharacterReplacement', () => {
  expect(longestRepeatingCharacterReplacement('AABABBA', 1)).toEqual(4)
})
