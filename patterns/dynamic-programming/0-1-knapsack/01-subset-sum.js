/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const subsetSum = (nums, target) => {
  const dfs = (index, currSum) => {
    if (index <= 0 || currSum <= 0) {
      return 0
    }
    if (nums[index] <= currSum) {
      return Math.max(nums[index] + dfs(index - 1, currSum - nums[index]), dfs(index - 1, currSum))
    } else {
      return dfs(index - 1, currSum)
    }
  }

  return dfs(nums.length - 1, target)
}

console.log(subsetSum([2, 3, 7, 8, 10], 11))
