/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const subarrayProductLessThanK = (nums, k) => {
  if (k <= 1) return 0
  let multi = 1
  let result = 0
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    multi *= nums[right]
    while (multi >= k && left < nums.length) {
      multi = multi / nums[left]
      left += 1
    }
    result = result + right - left + 1
  }
  return result
}

console.log(subarrayProductLessThanK([10, 5, 2, 6], 100))
