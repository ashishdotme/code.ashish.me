/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class FrequenciesInSortedArray {

  static void func(int[] nums){
    int frequenices = 1;
    int start = 1;
    int end = nums.length;
    while(start < end){
      while(start < end && nums[start] == nums[start - 1]){
        frequenices += 1;
        start += 1;
      }
      System.out.println(String.format("%d - %d", nums[start-1], frequenices));
      start += 1;
      frequenices = 1;
    }
  }

  public static void main(String[] args){
    int[] nums = {10, 10, 10, 25, 30, 30};
    func(nums);
  }
}