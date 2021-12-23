/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class FindAPeakElement {

  static int func(int[] nums) {
    int start = 0;
    int end = nums.length - 1;
    while (start <= end) {
      int mid = (start + end) / 2;
      if ((mid == 0 || nums[mid - 1] <= nums[mid])
          && (mid == nums.length - 1 || nums[mid] >= nums[mid + 1])) {
        return nums[mid];
      }
      if(mid > 0 && nums[mid-1] > nums[mid]){
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }

  public static void main(String[] args) {
    int[] nums = new int[] { 80, 70, 60};
    int result = func(nums);
    System.out.println(result);
  }
}
