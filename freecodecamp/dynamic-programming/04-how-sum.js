/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

console.time('combinationSum1')
var combinationSum = function(candidates, target) {
  if (target === 0) return []
  if (target <= 0) return null
  for (const candidate of candidates) {
    const remainder = target - candidate
    const result = combinationSum(candidates, remainder)
    if (result !== null) {
      return [...result, candidate]
    }
  }
  return null
}
console.log(combinationSum([2, 3], 121))
console.timeEnd('combinationSum1')

console.time('combinationSum2')
var combinationSum2 = function(candidates, target, dp = {}) {
  if (target in dp) return dp[target]
  if (target === 0) return []
  if (target <= 0) return null
  for (const candidate of candidates) {
    const remainder = target - candidate
    const result = combinationSum2(candidates, remainder)
    if (result !== null) {
      dp[target] = [...result, candidate]
      return dp[target]
    }
  }
  return null
}
console.log(combinationSum2([2, 3], 121))
console.timeEnd('combinationSum2')
