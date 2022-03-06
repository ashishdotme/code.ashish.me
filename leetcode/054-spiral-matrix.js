/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const spiralMatrix = matrix => {
  if (matrix.length == 0) {
    return []
  }
  let rowStart = 0
  let rowEnd = matrix.length - 1
  let columnStart = 0
  let columnEnd = matrix[0].length - 1
  const result = []
  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    for (let i = columnStart; i <= columnEnd; i++) {
      result.push(matrix[rowStart][i])
    }
    for (let i = rowStart + 1; i <= rowEnd; i++) {
      result.push(matrix[i][columnEnd])
    }
    for (let i = columnEnd - 1; i >= columnStart; i--) {
      if (rowStart == rowEnd) {
        break
      }
      result.push(matrix[rowEnd][i])
    }
    for (let i = rowEnd - 1; i > rowStart; i--) {
      if (columnStart == columnEnd) {
        break
      }
      result.push(matrix[i][columnStart])
    }
    rowStart++
    rowEnd--
    columnStart++
    columnEnd--
  }
  return result
}

console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
)
