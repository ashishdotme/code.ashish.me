/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const happyNumber = n => {
  const squareOfDigits = n => {
    let sum = 0
    while (n) {
      r = n % 10
      sum += Math.pow(r, 2)
      n = Math.floor(n / 10)
    }
    return sum
  }
  const set = new Set()
  while (!set.has(n)) {
    set.add(n)
    n = squareOfDigits(n)
    if (n == 1) {
      return true
    }
  }
  return false
}

console.log(happyNumber(19))
