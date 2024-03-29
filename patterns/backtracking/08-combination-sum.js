/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const combinationSum = (candidates, target) => {
  let result = []
  const backtrack = (index, curr, sum) => {
    if (sum === target) {
      result.push(curr.slice())
      return
    }
    if (sum > target) {
      return
    }
    for (let i = index; i < candidates.length; i++) {
      sum += candidates[i]
      curr.push(candidates[i])
      backtrack(i, curr, sum)
      curr.pop()
      sum -= candidates[i]
    }
  }
  backtrack(0, [], 0)
  return result
}

const combinationSum2 = (candidates, target) => {
  let result = []
  const backtrack = (arr, curr, sum) => {
    if (sum === target) {
      result.push(curr.slice())
      return
    }
    if (sum > target) {
      return
    }
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
      curr.push(arr[i])
      backtrack(arr.slice(i), curr, sum)
      curr.pop()
      sum -= arr[i]
    }
  }
  backtrack(candidates, [], 0)
  return result
}

console.log(combinationSum([2, 3, 6, 7], 7))
