/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const minimumCostForTickets = (days, costs) => {
  const dp = {}
  const day = [1, 7, 30]
  const dfs = index => {
    if (index >= days.length) {
      return 0
    }
    if (dp[index]) {
      return dp[index]
    }
    dp[index] = Number.MAX_VALUE
    let j = index
    for (let i = 0; i < 3; i++) {
      const d = day[i]
      const c = costs[i]
      while (j < days.length && days[j] <= days[index] + d) {
        j += 1
      }
      dp[index] = Math.min(dp[index], c + dfs(j))
    }
    return dp[index]
  }
  return dfs(0)
}

console.log(minimumCostForTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]))
