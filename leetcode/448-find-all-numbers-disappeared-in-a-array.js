/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const findAllNumbersDisappearedInAArray = nums => {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1
    nums[index] = nums[index] < 0 ? nums[index] : nums[index] * -1
  }
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }
  return result
}

console.log(findAllNumbersDisappearedInAArray([4, 3, 2, 7, 8, 2, 3, 1]))
