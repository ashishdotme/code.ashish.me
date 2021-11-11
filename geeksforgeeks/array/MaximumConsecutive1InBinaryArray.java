/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MaximumConsecutive1InBinaryArray {

  static int func(int[] nums){
    int current = 0;
    int max = 0;
    for(int i = 0; i < nums.length; i++){
      if(nums[i] == 1){
        current += 1;
      } else {
        current = 0;
      }
      max = Math.max(current, max);
    }
    return max;
  }

  public static void main(String[] args){
    int[] nums =  { 1,0, 1, 1, 0, 1, 1, 1, 1, 0};
    int result = func(nums);
    System.out.println(result);
  }
}