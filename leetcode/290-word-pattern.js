/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const wordPattern = (pattern, s) => {
  const sArray = s.split(' ')
  if (pattern.length !== sArray.length) {
    return false
  }
  let patternToMap = {}
  let sToMap = {}
  for (let i = 0; i < pattern.length; i++) {
    if (patternToMap[pattern[i]]) {
      if (patternToMap[pattern[i]] != sArray[i]) {
        return false
      }
    } else {
      patternToMap[pattern[i]] = sArray[i]
    }
    if (sToMap[sArray[i]]) {
      if (sToMap[sArray[i]] != pattern[i]) {
        return false
      }
    } else {
      sToMap[sArray[i]] = pattern[i]
    }
  }
  return true
}

console.log(wordPattern('abba', 'dog cat cat dog'))
