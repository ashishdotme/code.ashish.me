/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const longestCommonSubsequence = (text1, text2) => {
  const len1 = text1.length
  const len2 = text2.length
  const dp = []
  for (let i = 0; i <= text1.length; i++) {
    dp[i] = []
    dp[i][0] = 0
  }
  for (let j = 0; j <= text2.length; j++) {
    dp[0][j] = 0
  }
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[len1][len2]
}

console.log(longestCommonSubsequence('abcde', 'ace'))
