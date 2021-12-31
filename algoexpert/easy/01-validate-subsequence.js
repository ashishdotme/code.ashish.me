/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

// O(n) time
// O(1) space
const twoNumberSum = (arr, sub) => {
  let arrCount = 0
  let subCount = 0
  while (arrCount <= arr.length && subCount < sub.length) {
    if (arr[arrCount] == sub[subCount]) {
      subCount += 1
    }
    arrCount += 1
  }
  console.log(subCount)
  return subCount == sub.length
}

console.log(twoNumberSum([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
