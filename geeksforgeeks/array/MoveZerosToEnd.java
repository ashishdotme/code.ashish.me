/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MoveZerosToEnd {

  static int[] func(int[] nums){
    int count = 0;
    for(int i = 0; i < nums.length; i++){
      if(nums[i] != 0){
        nums[count] = nums[i];
        count += 1;
      }

    }
    return nums;
  }

  public static void main(String[] args){
    int[] nums = {10, 5, 0, 0, 8, 0, 9, 0};
    int[] result = func(nums);
    for(int i = 0; i < result.length; i++){
      System.out.println(result[i]);
    }
  }
}