/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class IndexOfLastOccurrance {

  static int func(int[] nums, int target) {
    int start = 0;
    int end = nums.length - 1;
    while(start < end){
      int mid = (start + end)/2;
      if(nums[mid] > target) {
        end = mid - 1;
      } else if(nums[mid] < target) {
        start = mid + 1;
      } else {
        if(mid == nums.length - 1 || nums[mid] != nums[mid + 1]){
          return mid;
        } else {
          start = mid + 1;
        }
      }
    }
    return nums[0];
  }

  public static void main(String[] args){
    int[] nums = new int[] { 1, 4, 8, 23, 67, 123, 123, 123, 3466, 5687 };
    int result = func(nums, 123);
    System.out.println(result);
  }
}
