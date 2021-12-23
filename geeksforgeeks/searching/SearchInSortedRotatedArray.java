/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class SearchInSortedRotatedArray {

  static int func(int[] nums, int target) {
    int start = 0;
    int end = nums.length - 1;
    while(start < end) {
      int mid = (start + end)/2;
      if(nums[mid] == target){
        return mid;
      }
      if(nums[start] < nums[mid]) {
        if(target > nums[start] && target < nums[mid]){
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        if(target > nums[mid] && target < nums[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    return nums[0];
  }

  public static void main(String[] args){
    int[] nums = new int[] { 10, 20, 40, 60, 5, 8};
    int result = func(nums, 5);
    System.out.println(result);
  }
}
