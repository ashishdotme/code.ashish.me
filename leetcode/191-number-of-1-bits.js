/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const numberOf1Bits = n => {
  let count = 0
  while (n) {
    n = n & (n - 1)
    count += 1
  }
  return count
}

console.log(numberOf1Bits(11111111111111111111111111111101))
