/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class IsArraySorted {

  static boolean func(int[] nums){
    for(int i = 1; i < nums.length; i++){
      if(nums[i] < nums[i-1]){
        return false;
      }
    }
    return true;
  }

  public static void main(String[] args){
    int[] nums = {5, 12, 30, 2, 55};
    boolean result = func(nums);
    System.out.println(result);
  }
}