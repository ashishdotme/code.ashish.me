/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const partitionEqualSubsetSum = nums => {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  if (sum % 2 != 0) {
    return false
  }
  let dp = new Map()
  const dfs = (index, currSum) => {
    const pos = index + '->' + currSum
    if (index == nums.length) {
      if (currSum == sum / 2) {
        return true
      }
      return false
    }
    if (dp.has(pos)) {
      return dp.get(pos)
    }
    let exclude = false,
      include = false
    if (nums[index] + currSum <= sum / 2) {
      include = dfs(index + 1, currSum + nums[index])
    }
    exclude = dfs(index + 1, currSum)
    const result = exclude || include
    dp.set(pos, result)
    return result
  }
  return dfs(0, 0)
}

console.log(partitionEqualSubsetSum([1, 2, 3, 4, 5, 6, 7]))
