/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const peakIndexInAMountainArray = arr => {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    const mid = Math.trunc((start + end) / 2)
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid
    } else if (arr[mid] < arr[mid - 1]) {
      start = mid + 1
    } else {
      end = end - 1
    }
  }
}

console.log(peakIndexInAMountainArray([0, 2, 1, 0]))
