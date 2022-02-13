/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const numberOfIslands = grid => {
  if (!grid) {
    return 0
  }
  const rows = grid.length
  const columns = grid[0].length
  let islands = 0
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const bfs = queue => {
    while (queue.length > 0) {
      const [row, column] = queue.shift()
      if (row < 0 || column < 0 || row >= rows || column >= columns || grid[row][column] == '0') {
        continue
      }
      grid[row][column] = '0'
      for (const dir of directions) {
        queue.push([dir[0] + row, dir[1] + column])
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] == '1') {
        bfs([[i, j]])
        islands += 1
      }
    }
  }
  return islands
}

console.log(
  numberOfIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]),
)
