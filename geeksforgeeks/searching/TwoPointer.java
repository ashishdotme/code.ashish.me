/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class TwoPointer {

  static int func(int[] nums, int target) {
    int start = 0;
    int end = nums.length - 1;
    while(start <= end){
      int sum = nums[start] + nums[end];
      if(sum == target){
        return 1;
      }
      if(sum > target){
        end = end - 1;
      } else {
        start = start + 1;
      }
    }
    return -1;
  }

  public static void main(String[] args){
    int[] nums = new int[] { 2, 5, 8, 12, 30};
    int result = func(nums, 17);
    System.out.println(result);
  }
}
