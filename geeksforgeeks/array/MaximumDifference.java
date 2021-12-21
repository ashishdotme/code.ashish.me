
/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MaximumDifference {

  static int func(int[] nums){
    int max = nums[1] - nums[0];
    int min = nums[0];
    for(int j = 1; j < nums.length; j++){
      max = Math.max(nums[j] - min, max);
      min = Math.min(nums[j], min);
    }
    return max;
  }

  public static void main(String[] args){
    int[] nums = {2, 3, 10, 6, 4, 8, 1};
    int result = func(nums);
    System.out.println(result);
  }
}
