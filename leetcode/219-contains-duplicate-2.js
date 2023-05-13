/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const containsDuplicate = (nums, k) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (Math.abs(map.get(nums[i]) - i) <= k) {
        return true
      }
    }
    map.set(nums[i], i)
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 1], 3))
