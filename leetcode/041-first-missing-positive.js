/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const firstMissingPositive = nums => {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] + 1 || 0
  }
  for (let i = 0; i < nums.length; i++) {
    if (!map[i]) {
      return i
    }
  }
}

test('firstMissingPositive', () => {
  expect(firstMissingPositive([1, 2, 0])).toEqual(3)
})
