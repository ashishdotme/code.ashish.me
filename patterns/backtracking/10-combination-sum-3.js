/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const combinationSum3 = (k, target) => {
  const result = []
  const backtrack = (index, curr, sum) => {
    if (curr.length == k) {
      if (sum == target) {
        result.push(curr.slice())
      }
      return
    }
    if (sum > target) {
      return
    }
    for (let i = index; i < 10; i++) {
      sum += i
      curr.push(i)
      backtrack(i + 1, curr, sum)
      curr.pop()
      sum -= i
    }
  }
  backtrack(1, [], 0)
  return result
}

console.log(combinationSum3(3, 7))
