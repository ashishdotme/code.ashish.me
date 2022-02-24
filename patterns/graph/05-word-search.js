/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const wordSearch = (board, word = '') => {
  const rows = board.length
  const columns = board[0].length

  let visited = new Set()
  const dfs = (pos, i) => {
    const [r, c] = pos
    //console.log(r, c, i)
    visited.add(`${r}${c}`)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      dfs([i, j], 0)
    }
  }
  console.log(visited.has(`${2}${3}`))
  return visited
}

console.log(
  wordSearch(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    // 'ABCCED',
  ),
)
