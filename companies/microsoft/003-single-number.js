/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const singleNumber = val => {
  return val
}

test('singleNumber', () => {
  expect(singleNumber([2, 2, 1])).toEqual(1)
  expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4)
  expect(singleNumber([1])).toEqual(1)
})
