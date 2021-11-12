/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class Majority {

  static int func(int[] nums){
    int result = 0;
    int count = 1;
    for(int i = 1; i < nums.length; i++){
      if(nums[result] == nums[i]){
        count += 1;
      } else {
        count -= 1;
      }
      if(count == 0){
        result = i;
        count = 1;
      }
    }

    count = 0;
    for(int i = 0; i < nums.length; i++){
      if(nums[result] == nums[i]){
        count += 1;
      }
    }
    if(count <= nums.length/2){
      return -1;
    }
    return result;
  }

  public static void main(String[] args){
    int[] nums = {8, 3, 4, 8, 8};
    int result = func(nums);
    System.out.println(result);
  }
}