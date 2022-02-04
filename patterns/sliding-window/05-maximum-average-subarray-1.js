/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const maximumAverageSubarray = (nums, k) => {
  let currentSum = 0
  let max = 0
  for (let i = 0; i < k; i++) {
    currentSum += nums[i]
  }
  max = currentSum
  for (let right = 1; right <= nums.length - k; right++) {
    currentSum = currentSum - nums[right - 1] + nums[right + k - 1]
    max = Math.max(currentSum, max)
  }
  return max / k
}

test('maximumAverageSubarray', () => {
  expect(maximumAverageSubarray([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75)
})
