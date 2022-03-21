/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const GuessNumberHigherOrLower = val => {
  let left = 0
  let right = val
  while (left <= val) {
    const mid = Math.trunc((left + right) / 2)
    const response = guess(mid)
    if (response > 0) {
      left = mid + 1
    } else if (response < 0) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(GuessNumberHigherOrLower(2))
