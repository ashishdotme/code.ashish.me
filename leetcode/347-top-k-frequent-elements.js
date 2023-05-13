/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const topKFrequentElements = (nums, k) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  let sortedArray = [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
  return sortedArray
}

console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2))
