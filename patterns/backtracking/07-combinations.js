/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const combinations = (n, k) => {
  const result = []
  const backtrack = (index, curr) => {
    if (curr.length == k) {
      result.push(curr.slice())
      return
    }
    for (let i = index; i <= n; i++) {
      curr.push(i)
      backtrack(i + 1, curr)
      curr.pop()
    }
  }
  backtrack(1, [])
  return result
}

console.log(combinations(4, 2))
