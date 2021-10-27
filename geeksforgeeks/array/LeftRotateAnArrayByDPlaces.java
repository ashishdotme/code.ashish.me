import java.util.*;
/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class LeftRotateAnArrayByDPlaces {

  static int[] func(int[] nums, int place){
    int[] temp = new int[place];
    for(int i = 0; i < place; i++){
      temp[i] = nums[i];
    }
    for(int i = place; i < nums.length; i++){
      nums[i - place] = nums[i];
    }
    for(int i = 0; i < place; i++){
      nums[nums.length-place+i] = temp[i];
    }
    return nums;
  }

  public static void main(String[] args){
    int[] nums = { 10, 20, 30, 40, 50 };
    int place = 2;
    int[] result = func(nums, place);
    System.out.println(Arrays.toString(result));
  }
}