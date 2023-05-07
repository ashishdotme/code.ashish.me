/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const pascalTriangle = numRows => {
  if (numRows == 0) {
    return []
  }
  if (numRows == 1) {
    return [[1]]
  }
  if (numRows == 2) {
    return [[1], [1, 1]]
  }
  let result = [[1]]
  while (result.length < numRows) {
    let temp = [1]
    const last = result.length - 1
    for (let i = 1; i < result[last].length; i++) {
      temp.push(result[last][i] + result[last][i - 1])
    }
    temp.push(1)
    result.push(temp)
  }
  return result
}

console.log(pascalTriangle(5))
