/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const sortColors = nums => {
  const swap = (i, j) => {
    let temp = nums[j]
    nums[j] = nums[i]
    nums[i] = temp
  }
  let l = 0
  let r = nums.length - 1
  let i = 0
  while (i <= r) {
    if (nums[i] == 0) {
      swap(i, l)
      l += 1
    } else if (nums[i] == 2) {
      swap(i, r)
      r -= 1
    }
    i += 1
  }

  return nums
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
