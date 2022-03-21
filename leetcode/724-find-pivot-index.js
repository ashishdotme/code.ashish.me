/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const findPivotIndex = nums => {
  let leftSum = 0
  const total = nums.reduce((a, b) => a + b, 0)
  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - nums[i] - leftSum
    if (rightSum == leftSum) {
      return i
    }
    leftSum += nums[i]
  }
  return -1
}

console.log(findPivotIndex([1, 7, 3, 6, 5, 6]))
