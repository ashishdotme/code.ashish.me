/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const minimumSizeSubarraySum = (nums, target) => {
  let left = 0
  let total = 0
  let result = Infinity
  for (let right = 0; right < nums.length; right++) {
    total += nums[right]
    while (total >= target) {
      result = Math.min(result, right - left + 1)
      total -= nums[left]
      left += 1
    }
  }
  return result
}

test('minimumSizeSubarraySum', () => {
  expect(minimumSizeSubarraySum([2, 3, 1, 2, 4, 3], 7)).toEqual(2)
})
