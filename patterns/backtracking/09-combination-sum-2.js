/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => a - b)
  const result = []
  const backtrack = (index, curr, sum) => {
    if (sum === target) {
      result.push(curr.slice())
      return
    }
    if (sum > target) {
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue
      sum += candidates[i]
      curr.push(candidates[i])
      backtrack(i + 1, curr, sum)
      curr.pop()
      sum -= candidates[i]
    }
  }
  backtrack(0, [], 0)
  return result
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
