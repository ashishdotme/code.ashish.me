/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class CountOnesInSortedBinaryArray {

  static int func(int[] nums, int target) {
    int start = 0;
    int end = nums.length - 1;
    while (start < end) {
      int mid = (start + end)/2;
      if(nums[mid]==0){
        start = mid + 1;
      } else {
        if(mid == 0 || nums[mid] != nums[mid -1]){
          return nums.length - mid;
        } else {
          end = mid - 1;
        }
      }
    }
    return -1;
  }

  public static void main(String[] args) {
    int[] nums = new int[] { 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 };
    int result = func(nums, 123);
    System.out.println(result);
  }
}
