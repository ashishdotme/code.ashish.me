/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

console.time('func1')
let func1 = (n, m) => {
  if (n === 0 || m === 0) return 0
  if (n === 1 && m === 1) return 1
  return func1(n - 1, m) + func1(n, m - 1)
}
console.log(func1(10, 10))
console.timeEnd('func1')

console.time('func2')
let func2 = (n, m, dp = {}) => {
  const key = n + ',' + m
  if (key in dp) return dp[key]
  if (n === 0 || m === 0) return 0
  if (n === 1 && m === 1) return 1
  dp[key] = func2(n - 1, m, dp) + func2(n, m - 1, dp)
  return dp[key]
}
console.log(func2(10, 10))
