/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const arrangingCoins = n => {
  let left = 0
  let right = n
  let result = 0
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2)
    const coinsNeeded = (mid / 2) * (mid + 1)
    if (coinsNeeded > n) {
      right = mid - 1
    } else {
      left = mid + 1
      result = Math.max(result, mid)
    }
  }
  return result
}

console.log(arrangingCoins(5))
