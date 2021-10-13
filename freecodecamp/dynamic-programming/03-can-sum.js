/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

console.time('canSum1')
var findTargetSumWays = function(nums, target) {
  if (target === 0) return true
  if (target < 0) return false
  for (let num of nums) {
    const remainder = target - num
    if (findTargetSumWays(nums, remainder) === true) {
      return true
    }
  }
  return false
}
console.log(findTargetSumWays([5, 55, 100], 556))
console.timeEnd('canSum1') //40913.223ms

console.time('canSum2')
var findTargetSumWays2 = function(nums, target, dp = {}) {
  if (target in dp) return dp[target]
  if (target === 0) return true
  if (target < 0) return false
  for (let num of nums) {
    const remainder = target - num
    if (findTargetSumWays2(nums, remainder, dp) === true) {
      dp[target] = true
      return true
    }
  }
  dp[target] = false
  return false
}
console.log(findTargetSumWays2([5, 55, 100], 556))
console.timeEnd('canSum2') //1.220ms
