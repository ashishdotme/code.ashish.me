/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

console.time('func1')
let func1 = n => {
  if (n <= 2) return 1
  return func1(n - 1) + func1(n - 2)
}
console.log(func1(45))
console.timeEnd('func1')

console.time('func2')
let func2 = (n, dp = {}) => {
  if (n in dp) {
    return dp[n]
  }
  if (n <= 2) return 1
  dp[n] = func2(n - 1, dp) + func2(n - 2, dp)
  return dp[n]
}
console.log(func2(45))
console.timeEnd('func2')
