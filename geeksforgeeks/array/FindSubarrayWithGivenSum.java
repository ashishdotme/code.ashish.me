/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class FindSubarrayWithGivenSum {

  static String func(int[] nums, int sum) {
    int currentSum = nums[0];
    int start = 0;
    for (int i = 1; i <= nums.length; i++) {
      while (currentSum > sum && start < i - 1) {
        currentSum -= nums[start];
        start += 1;
      }
      if (currentSum == sum) {
        String res = start + " - " + (i - 1);
        return res;
      }
      if (i < nums.length) {
        currentSum += nums[i];
      }
    }
    return "Not found";
  }

  public static void main(String[] args) {
    int[] nums = { 1, 4, 20, 3, 10, 5 };
    String result = func(nums, 33);
    System.out.println(result);
  }
}
