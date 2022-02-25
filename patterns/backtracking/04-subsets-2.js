/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const subsets2 = nums => {
  const unique = new Set()
  nums.sort((a, b) => a - b)
  const result = []
  const backtrack = (index, combination) => {
    if (index == nums.length) {
      if (!unique.has(combination.join('-'))) {
        unique.add(combination.join('-'))
        result.push(combination)
      }
      return
    }
    backtrack(index + 1, [...combination])
    backtrack(index + 1, [...combination, nums[index]])
  }
  backtrack(0, [])
  return result
}

console.log(subsets2([1, 2, 2]))
