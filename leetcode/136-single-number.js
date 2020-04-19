/**
 * 
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

/* 
 * Given a non-empty array of integers, every element appears
 * twice except for one. Find that single one.
 * 
 * Example 1:
 * Input: [2,2,1]
 * Output: 1
 */

function singleNumber(value) {
  let res = 0
  for (let index = 0; index < value.length; index++) {
    res = res ^ value[index]    
  }
  return res
}

test('single Number', () => {
  expect(singleNumber([2,2,1])).toEqual(1)
  expect(singleNumber([4,1,2,1,2])).toEqual(4)
});