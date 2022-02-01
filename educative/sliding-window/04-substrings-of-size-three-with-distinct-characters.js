/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const substringsOfSizeThreeWithDistinctCharacters = str => {
  if (str && str.length < 3) {
    return 0
  }
  let result = 0
  let s = [str[0], str[1]]
  for (let right = 2; right < str.length; right++) {
    s.push(str[right])
    if (new Set(s).size == 3) {
      result += 1
    }
    s.shift()
  }
  return result
}

test('substringsOfSizeThreeWithDistinctCharacters', () => {
  expect(substringsOfSizeThreeWithDistinctCharacters('aababcabc')).toEqual(5)
})
