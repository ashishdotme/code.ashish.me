/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class LeaderInArray {
  static void func(int[] nums){
    int result = nums[nums.length - 1];
    System.out.println(result);
    for(int i = nums.length-2; i >= 0; i--){
      if(nums[i] > result){
        result = nums[i];
        System.out.println(result);
      }
    }
  }

  public static void main(String[] args){
    int[] nums = {7, 10, 4, 3, 6, 5, 2};
    func(nums);
  }
}