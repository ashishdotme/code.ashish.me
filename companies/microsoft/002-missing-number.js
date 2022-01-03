/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const missingNumber = nums => {
  let actualSum = 0
  for (const num of nums) {
    actualSum += num
  }
  const totalSum = (nums.length * (nums.length + 1)) / 2
  return totalSum - actualSum
}

test('missingNumber', () => {
  expect(missingNumber([3, 0, 1])).toEqual(2)
  expect(missingNumber([0, 1])).toEqual(2)
  expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8)
})
