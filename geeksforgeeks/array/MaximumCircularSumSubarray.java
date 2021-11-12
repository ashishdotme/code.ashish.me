/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MaximumCircularSumSubarray {

  static int maxSumSubarray(int[] nums){
    int current = 0;
    int max = 0;
    for(int i = 0; i < nums.length; i++){
      current = Math.max(nums[i] + current, nums[i]);
      max = Math.max(current, max);
    }
    return max;
  }

  static int maxCircularSumArray(int[] nums){
    int maxSumSubarray = 0;
    int circularMax = 0;
    int maxSum = 0;
    maxSumSubarray = maxSumSubarray(nums);
    for(int i = 0; i < nums.length; i++){
      maxSum += nums[i];
      nums[i] = -nums[i];
    }
    circularMax = maxSum + maxSumSubarray(nums);
    return Math.max(circularMax, maxSumSubarray);
  }

  public static void main(String[] args){
    int[] nums = {5, -2 , 3, 4};
    int result = func(nums);
    System.out.println(result);
  }
}