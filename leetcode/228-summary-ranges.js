/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const summaryRanges = nums => {
  let result = []
  let right = 0
  let counter = 0
  while (right < nums.length) {
    if (nums[right + 1] === nums[right] + 1) {
      right++
    } else {
      if (counter === right) {
        result.push(nums[counter])
      } else {
        result.push(`${nums[counter]}->${nums[right]}`)
      }
      counter = ++right
    }
  }
  return result
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
