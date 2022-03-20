/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const uglyNumber = n => {
  if (n <= 0) {
    return false
  }
  const nums = [2, 3, 5]
  for (let i = 0; i < nums.length; i++) {
    while (n % nums[i] == 0) {
      n = Math.floor(n / nums[i])
    }
  }
  return n == 1
}

console.log(uglyNumber(6))
