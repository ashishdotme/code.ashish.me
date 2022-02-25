/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const permutations2 = nums => {
  const result = []
  const visited = new Set()
  nums.sort()
  const backtrack = curr => {
    if (nums.length == curr.length) {
      result.push([...curr])
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (visited.has(i) || (i > 0 && nums[i] === nums[i - 1] && !visited.has(i - 1))) {
          continue
        }
        visited.add(i)
        curr.push(nums[i])
        backtrack(curr)
        visited.delete(i)
        curr.pop()
      }
    }
  }
  backtrack([])
  return result
}

console.log(permutations2([1, 1, 2]))
