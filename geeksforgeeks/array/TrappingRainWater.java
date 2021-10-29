import java.util.Arrays;

/**
 *
 * Ashish Patel 
 * e: ashishsushilPatel@gmail.com 
 * w: https://ashish.me
 *
 */
class TrappingRainWater {

  static int func(int[] nums) {
    int result = 0;
    int[] lMax = new int[nums.length];
    int[] rMax = new int[nums.length];
    lMax[0] = nums[0];
    for(int i = 1; i < nums.length; i++){
      lMax[i] = Math.max(nums[i], lMax[i-1]);
    }
    rMax[nums.length-1] = nums[nums.length-1];
    for(int i = nums.length -2; i> 0;i--){
      rMax[i] = Math.max(nums[i], rMax[i+1]);
    }
    for(int i = 1; i < nums.length-1; i++){
      result += Math.min(rMax[i], lMax[i]) - nums[i];
    }
    return result;
  }

  public static void main(String[] args) {
    int[] nums = { 3, 0, 1, 2, 5 };
    int result = func(nums);
    System.out.println(result);
  }
}

class TrappingRainWater2 {

  static int func(int[] nums) {
    int result = 0;
    for (int i = 1; i < nums.length - 1; i++) {
      int lMax = nums[0];
      for (int j = 0; j < i; j++) {
        lMax = Math.max(lMax, nums[j]);
      }
      int rMax = nums[nums.length - 1];
      for (int j = nums.length - 1; j > i; j--) {
        rMax = Math.max(rMax, nums[j]);
      }
      result += Math.min(rMax, lMax) - nums[i];
    }
    return result;
  }

  public static void main(String[] args) {
    int[] nums = { 3, 0, 1, 2, 5 };
    int result = func(nums);
    System.out.println(result);
  }
}