/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class ReverseArray {

  static int[] func(int[] nums){
    int start = 0;
    int end = nums.length-1;
    while(start < end){
      int temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start += 1;
      end -= 1;
    }
    return nums;
  }

  public static void main(String[] args){
    int[] nums = {30, 7, 6, 5, 10};
    int[] result = func(nums);
    for(int i =0; i < result.length; i++){
      System.out.println(result[i]);
    }
  }
}