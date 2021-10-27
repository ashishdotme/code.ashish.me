/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class DuplicatesInSortedArray {

  static int[] func(int[] nums){
    int res = 1;
    for(int i = 1; i < nums.length; i++){
      if(nums[i] != nums[i - 1]){
        nums[res] = nums[i];
        res += 1;
      }
    }
    return nums;
  }

  public static void main(String[] args){
    int[] nums = {10, 20, 20, 30, 30, 30};
    int[] result = func(nums);
    for(int i = 0; i < result.length; i++){
      System.out.println(result[i]);
    }
  }
}