/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const targetSum = (nums, target) => {
  const dp = {}
  const backtrack = (index, currSum) => {
    const pos = index + '->' + currSum
    if (pos in dp) return dp[pos]
    if (index == nums.length) {
      if (currSum == target) {
        return 1
      } else {
        return 0
      }
    }
    dp[pos] = backtrack(index + 1, currSum + nums[index]) + backtrack(index + 1, currSum - nums[index])
    return dp[pos]
  }
  return backtrack(0, 0)
}

console.log(targetSum([1, 1, 1, 1, 1], 3))
