/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const subsets2 = nums => {
  nums.sort((a, b) => a - b)
  const result = []
  const backtrack = (arr, curr) => {
    result.push(curr.slice())
    for (let i = 0; i < arr.length; i++) {
      if (i == 0 || arr[i] != arr[i - 1]) {
        curr.push(arr[i])
        backtrack(arr.slice(i + 1), curr)
        curr.pop()
      }
    }
  }
  backtrack(nums, [])
  return result
}

const subsets22 = nums => {
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
