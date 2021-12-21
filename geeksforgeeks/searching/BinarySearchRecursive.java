/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class BinarySearchRecursive {

  static int func(int[] nums, int start, int end, int target){
    if(start > end) {
      return -1;
    }
    int mid = Math.abs((start+end)/2);
    if(nums[mid] == target){
      return mid;
    }
    if(nums[mid] > target) {
      return func(nums, start, mid - 1, target);
    } else {
      return func(nums, mid + 1, end, target);
    }
  }

  public static void main(String[] args){
    int[] nums = new int[]{1,4,6,23,67,78,93,123,646,5687};
    int result = func(nums, 0, nums.length, 646);
    System.out.println(result);
  }
}
