/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class BinarySearchIterative {

  static int func(int[] nums, int target){
    int start = 0;
    int end = nums.length - 1;
    while(start < end){
      int mid = Math.abs((start+end)/2);
      if(nums[mid] == target){
        return mid;
      }
      if(nums[mid] < target){
        start = mid + 1;
      }
      if(nums[mid] > target){
        end = mid - 1;
      }
    }
    return -1;
  }

  public static void main(String[] args){
    int[] nums = new int[]{1,4,6,23,67,78,93,123,646,5687};
    int result = func(nums, 123);
    System.out.println(result);
  }
}
