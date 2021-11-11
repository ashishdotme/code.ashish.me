/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MaximumSumSubarray {

  static int func(int[] nums){
    int result = nums[0];
    int current = nums[0];
    for(int i = 0; i < nums.length; i++){
      current = Math.max(current + nums[i], nums[i]);
      result = Math.max(current, result);
    }
    return result;
  }

  public static void main(String[] args){
    int[] nums = {2, 3, -8, 7, -1, 2, 3};
    int result = func(nums);
    System.out.println(result);
  }
}