import java.util.Arrays;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class LeftRotateAnArrayByOne {

  static int[] func(int[] nums){
    int temp = nums[0];
    for(int i = 1; i < nums.length; i++) {
      nums[i-1] = nums[i];
    }
    nums[nums.length - 1] = temp;
    return nums;
  }

  public static void main(String[] args){
    int[] nums = { 10, 20, 30, 40, 50 };
    int[] result = func(nums);
    System.out.println(Arrays.toString(result));
  }
}