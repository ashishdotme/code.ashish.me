/**
 *
 * Ashish Patel e: ashishsushilPatel@gmail.com w: https://ashish.me
 *
 */

class MaximumSumOfKConsecutive {

  static int func(int[] nums, int k) {
    int maxSum = 0;
    int currentSum = 0;
    for (int i = 0; i < k; i++) {
      currentSum += nums[i];
    }
    maxSum = currentSum;
    for( int i = k; i < nums.length; i++ ){
      currentSum += nums[i] - nums[i-k];
      maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
  }

  public static void main(String[] args) {
    int[] nums = { 5, -10, 6, 90, 3 };
    int result = func(nums, 2);
    System.out.println(result);
  }
}