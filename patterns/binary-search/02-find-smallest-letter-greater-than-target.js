/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const findSmallestLetterGreaterThanTarget = (letters, target) => {
  if (letters[0] > target || letters[letters.length - 1] <= target) {
    return letters[0]
  }
  let start = 0
  let end = letters.length - 1
  while (start < end) {
    const mid = Math.trunc((end + start) / 2)
    console.log(start, end, mid, letters[mid])
    if (letters[mid] > target) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return letters[start]
}

console.log(findSmallestLetterGreaterThanTarget(['c', 'f', 'j'], 'k'))
