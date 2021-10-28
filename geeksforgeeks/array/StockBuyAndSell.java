/**
 *
 * Ashish Patel 
 * e: ashishsushilPatel@gmail.com 
 * w: https://ashish.me
 *
 */


public class StockBuyAndSell {

  static int func(int[] nums) {
    int result = 0;
    for(int i = 1; i < nums.length; i++){
      if(nums[i-1] < nums[i]){
        result += nums[i] - nums[i-1];
      }
    }
    return result;
  }

  public static void main(String[] args) {
    int[] nums = { 1, 5, 3, 8, 12 };
    int result = func(nums);
    System.out.println(result);
  }
}

class StockBuyAndSell2 {

  static int func(int[] nums, int start, int end) {
    if (start >= end) {
      return 0;
    }
    int result = 0;
    for (int i = start; i < end; i++) {
      for (int j = i + 1; j <= end; j++) {
        if (nums[j] > nums[i]) {
          int currentProfit = nums[j] - nums[i] + func(nums, start, i - 1) + func(nums, j + 1, end);
          result = Math.max(result, currentProfit);
        }
      }
    }
    return result;
  }

  public static void main(String[] args) {
    int[] nums = { 1, 5, 3, 8, 12 };
    int result = func(nums, 0, nums.length - 1);
    System.out.println(result);
  }
}