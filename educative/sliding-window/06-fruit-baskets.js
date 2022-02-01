/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const fruitBaskets = trees => {
  let left = 0
  let w = {}
  let max = 0
  for (let right = 0; right < trees.length; right++) {
    w[trees[right]] = w[trees[right]] + 1 || 1
    while (Object.keys(w).length > 2) {
      w[trees[left]] -= 1
      if (w[trees[left]] == 0) {
        delete w[trees[left]]
      }
      left += 1
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}

console.log(fruitBaskets([1, 2, 3, 2, 2]))
