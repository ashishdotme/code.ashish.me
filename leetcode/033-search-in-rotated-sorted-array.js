/**
 * 
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

function searchInRotatedSortedArray(nums, target) {
  let left=0;
  let right=nums.length-1;
  while(left <= right) {
    let mid = Math.floor(left+ right/2)
    if(nums[mid] === target){
      return mid
    }
    if(target < nums[mid]){
      if(nums[left] <= nums[mid] && ) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    if(target > nums[mid]) {
      if(nums[right] >= nums[mid] && ){
        left = mid + 1
      } else {
        right= mid - 1
      }
    }
  }
  return -1
}

test('search In Rotated Sorted Array', () => {
  expect(searchInRotatedSortedArray([4,5,6,7,0,1,2], 0)).toEqual(4)
});