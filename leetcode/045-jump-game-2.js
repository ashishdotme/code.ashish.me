/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const jumpGame2 = nums => {
  let left = 0
  let right = 0
  let result = 0
  while (right < nums.length - 1) {
    let max = 0
    for (let i = left; i < right + 1; i++) {
      max = Math.max(max, i + nums[i])
    }
    left = right + 1
    right = max
    result += 1
  }
  return result
}

console.log(jumpGame2([2, 3, 1, 1, 4]))
