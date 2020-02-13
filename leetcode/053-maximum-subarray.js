/**
 * 
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

function maximumSubarray(nums) {
  let sum = nums[0]
  for (let index = 1; index < nums.length; index++) {
    nums[index] = Math.max(nums[index], nums[index] + nums[index-1])
    sum = Math.max(sum, nums[index])
  }
  return sum
}

console.log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4]))

// test('maximum Subarray', () => {
//   expect(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6)
// });