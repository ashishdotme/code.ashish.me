/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const longestConsecutiveSequence = nums => {
  let set = new Set(nums)
  let counter = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let current = nums[i]
      while (set.has(current++)) {
        counter++
        max = Math.max(counter, max)
      }
      counter = 0
    }
  }
  return max
}

console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
