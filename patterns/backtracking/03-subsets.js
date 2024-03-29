/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const subsets = nums => {
  const result = []
  const backtrack = (arr, curr) => {
    result.push(curr.slice())
    for (let i = 0; i < arr.length; i++) {
      curr.push(arr[i])
      backtrack(arr.slice(i + 1), curr)
      curr.pop()
    }
  }
  backtrack(nums, [])
  return result
}

const subsets1 = nums => {
  const result = []
  const backtrack = (index, combination) => {
    if (index == nums.length) {
      result.push(combination)
      return
    }
    backtrack(index + 1, [...combination])
    backtrack(index + 1, [...combination, nums[index]])
  }
  backtrack(0, '')
  return result
}

console.log(subsets([1, 2, 3]))
