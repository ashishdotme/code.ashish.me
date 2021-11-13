/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MinimumConsecutiveFlips {

  static int func(int[] nums){
    for(int i = 1; i < nums.length; i++){
      if(nums[i] != nums[i-1]){
        if(nums[i] != nums[0]){
          System.out.print("From " + i + " to ");
        } else {
          System.out.println(i -1);
        }
      }
    }

    if(nums[nums.length-1] != nums[0]){
      System.out.println(nums.length-1);
    }
    return nums[0];
  }

  public static void main(String[] args){
    int[] nums = {1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1};
    int result = func(nums);
    System.out.println(result);
  }
}