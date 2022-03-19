/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const replaceElementsWithGreatestElementOnRightSide = arr => {
  let rightMax = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    const newMax = Math.max(rightMax, arr[i])
    arr[i] = rightMax
    rightMax = newMax
  }
  return arr
}

console.log(replaceElementsWithGreatestElementOnRightSide([17, 18, 5, 4, 6, 1]))
