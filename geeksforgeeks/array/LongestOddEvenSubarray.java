/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class LongestOddEvenSubarray {

  static int func(int[] nums){
    int current = 1;
    int longest = 1;
    for(int i = 1; i < nums.length; i++){
      if((nums[i] % 2 == 0 && nums[i-1] % 2 != 0) || (
        nums[i] % 2 != 0 && nums[i-1] % 2 == 0
      )) {
        current += 1;
      } else {
        current = 1;
      }
      longest = Math.max(current, longest);
    }
    return longest;
  }

  public static void main(String[] args){
    int[] nums = {10, 12, 14, 7, 8};
    int result = func(nums);
    System.out.println(result);
  }
}