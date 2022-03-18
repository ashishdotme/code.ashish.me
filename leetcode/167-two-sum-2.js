/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const twoSum2 = (numbers, target) => {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    if (numbers[left] + numbers[right] == target) {
      return [left, right]
    }
    if (numbers[left] + numbers[right] > target) {
      right -= 1
    } else {
      left += 1
    }
  }
}

console.log(twoSum2([2, 7, 11, 15], 9))
