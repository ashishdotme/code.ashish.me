/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const searchA2DMatrix2 = (matrix, target) => {
  let row = 0
  let col = matrix[0].length - 1
  while (col >= 0 && row < matrix.length) {
    if (matrix[row][col] == target) {
      return true
    } else if (matrix[row][col] < target) {
      row++
    } else {
      col--
    }
  }
  return false
}

console.log(
  searchA2DMatrix2(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20,
  ),
)
