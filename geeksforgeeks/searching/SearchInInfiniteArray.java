/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class SearchInInfiniteArray {

  static int binarySearcy(int[] nums, int start, int end, int target) {
    while(start <= end){
      int mid = (start + end)/2;
      if(nums[mid] == target){
        return mid;
      }
      if(nums[mid] > target) {
        end = mid - 1;
      } else {
        start = start + 1;
      }
    }
    return -1;
  }

  static int func(int[] nums, int target) {
    if (nums[0] == target) {
      return 0;
    }
    int i = 1;
    while (nums[i] < target) {
      i = i * 2;
    }
    if(nums[i] == target){
      return i;
    }
    return binarySearcy(nums, (i/2) + 1, i-1, target);
  }

  public static void main(String[] args) {
    int[] nums = new int[] { 1, 4, 8, 34, 123, 3466, 5687 };
    int result = func(nums, 34);
    System.out.println(result);
  }
}
