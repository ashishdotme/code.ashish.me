/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const backspaceStringCompare = (s, t) => {
  let sPointer = s.length - 1
  let tPointer = t.length - 1
  let sBackspaceCount = 0
  let tBackspaceCount = 0
  while (sPointer >= 0 || tPointer >= 0) {
    if (sBackspaceCount == 0 && tBackspaceCount == 0) {
      if (s[sPointer] !== '#' && t[tPointer] !== '#') {
        if (s[sPointer] !== t[tPointer]) {
          return false
        }
        sPointer -= 1
        tPointer -= 1
      } else {
        if (s[sPointer] == '#') {
          sBackspaceCount += 1
          sPointer -= 1
        }
        if (t[tPointer] == '#') {
          tBackspaceCount += 1
          tPointer -= 1
        }
      }
    } else {
      while (sBackspaceCount != 0) {
        if (s[sPointer] == '#') {
          sBackspaceCount += 1
        } else {
          sBackspaceCount -= 1
        }
        sPointer -= 1
      }
      while (tBackspaceCount != 0) {
        if (t[tPointer] == '#') {
          tBackspaceCount += 1
        } else {
          tBackspaceCount -= 1
        }
        tPointer -= 1
      }
    }
  }
  return true
}

console.log(backspaceStringCompare('ab##', 'a#d#'))
