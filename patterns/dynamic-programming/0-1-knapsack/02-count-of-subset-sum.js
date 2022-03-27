/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const numSubseq = (nums, target) => {
  const dp = new Map()
  const dfs = (index, currSum) => {
    const pos = index + '->' + currSum
    if (currSum == target) {
      return 1
    }
    if (index == nums.length) {
      return 0
    }
    if (dp.has(pos)) {
      return dp.get(pos)
    }
    let included = 0,
      excluded = 0
    if (nums[index] + currSum <= target) {
      included = dfs(index + 1, currSum + nums[index]) + dfs(index + 1, currSum)
    } else {
      excluded = dfs(index + 1, currSum)
    }
    const result = included + excluded
    dp.set(pos, result)
    return result
  }
  return dfs(0, 0)
}

console.log(numSubseq([2, 3, 5, 6, 8, 10], 10))
