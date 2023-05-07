/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const pascalTriangle2 = rowIndex => {
  let result = [[1]]
  while (result.length <= rowIndex) {
    let temp = [1]
    const last = result.length - 1
    for (let i = 1; i < result[last].length; i++) {
      temp.push(result[last][i] + result[last][i - 1])
    }
    temp.push(1)
    result.push(temp)
  }
  return result[rowIndex]
}

console.log(pascalTriangle2(3))
