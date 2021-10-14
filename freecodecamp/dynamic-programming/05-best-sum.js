/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

console.time('bestsum1')
var bestSum = function(candidates, target) {
  if (target === 0) return []
  if (target < 0) return null
  let shortestSum = candidates
  for (const candidate of candidates) {
    const remainder = target - candidate
    const result = bestSum(candidates, remainder)
    if (result !== null) {
      const sum = [...result, candidate]
      if (sum.length !== 0 && shortestSum.length > sum.length) {
        shortestSum = sum
      }
    }
  }
  return shortestSum
}
console.log(bestSum([10, 1, 2, 7, 6, 1, 5], 8))
console.timeEnd('bestsum1')

console.time('bestsum2')
var bestSum2 = function(candidates, target, dp = {}) {
  if (target in dp) return dp[target]
  if (target === 0) return []
  if (target < 0) return null
  let shortestSum = candidates
  for (const candidate of candidates) {
    const remainder = target - candidate
    const result = bestSum2(candidates, remainder, dp)
    if (result !== null) {
      const sum = [...result, candidate]
      if (sum.length !== 0 && shortestSum.length > sum.length) {
        shortestSum = sum
      }
    }
  }
  dp[target] = shortestSum
  return shortestSum
}
console.log(bestSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.timeEnd('bestsum2')
