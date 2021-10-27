/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

import java.util.HashMap;

class DuplicatesInArray {

  static void func(int[] nums){
    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    for(int i = 0; i < nums.length; i++){
      if(map.get(nums[i]) == null){
        System.out.println(nums[i]);
      }
      map.put(nums[i], 0);
    }
  }

  public static void main(String[] args){
    int[] nums = {10, 20, 20, 30, 30, 30};
    func(nums);
  }
}