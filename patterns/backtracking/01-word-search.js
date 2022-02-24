/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const wordSearch = (board, word) => {
  const neighbors = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const find = (index, i, j) => {
    if (index === word.length) {
      return true
    }
    if (!board[i] || board[i][j] !== word[index]) {
      return false
    }
    board[i][j] = '*'
    for (const [xx, yy] of neighbors) {
      if (find(index + 1, i + xx, j + yy)) {
        return true
      }
    }
    board[i][j] = word[index]
    return false
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (find(0, i, j)) {
        return true
      }
    }
  }
  return false
}

console.log(
  wordSearch(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB',
  ),
)
