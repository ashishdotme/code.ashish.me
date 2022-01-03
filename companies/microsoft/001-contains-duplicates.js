/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const containsDuplicates = nums => {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true
    }
    map[nums[i]] = 1
  }
  return false
}

test('containsDuplicates', () => {
  expect(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true)
  expect(containsDuplicates([1, 2, 3, 1])).toEqual(true)
  expect(containsDuplicates([1, 2, 3, 4])).toEqual(false)
})
