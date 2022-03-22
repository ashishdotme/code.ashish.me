/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const wordBreak = (s, wordDict) => {
  let cache = new Array(s.length).fill(false)
  cache[s.length] = true
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = 0; j < wordDict.length; j++) {
      if (i + wordDict[j].length <= s.length && s.slice(i, wordDict[j].length + i) == wordDict[j]) {
        console.log(s.slice(i, wordDict[j].length))
        cache[i] = cache[i + wordDict[j].length]
        if (cache[i]) {
          break
        }
      }
    }
  }
  return cache[0]
}

console.log(wordBreak('leetcode', ['leet', 'code']))
