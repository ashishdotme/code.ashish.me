/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class CountOccurancesInSorted {

  static int firstOccurance(int[] nums, int target) {
    int start = 0;
    int end = nums.length - 1;
    while(start <= end){
      int mid = (start+end)/2;
      if(nums[mid] > target){
        end = mid - 1;
      } else if(nums[mid] < target){
        start = mid + 1;
      } else {
        if(mid == 0 || nums[mid] != nums[mid - 1]){
          return mid;
        } else {
          end = mid - 1;
        }
      }
    }
    return -1;
  }

  static int lastOccurance(int[] nums, int target) {
    int start = 0;
    int end = nums.length - 1;
    while(start <= end){
      int mid = (start + end)/2;
      if(nums[mid] > target){
        end = mid - 1;
      } else if(nums[mid] < target){
        start = mid + 1;
      } else {
        if(mid == nums.length - 1 || nums[mid] != nums[mid + 1]){
          return mid;
        } else {
          start = mid + 1;
        }
      }
    }
    return -1;
  }

  static int countOccurance(int[] nums, int target) {
    int first = firstOccurance((nums), target);

    if(first == -1){
      return 0;
    } else {
      return lastOccurance(nums, target) - first + 1;
    }
  }

  public static void main(String[] args){
    int[] nums = new int[] { 1, 4, 8, 34, 34, 34, 123, 123, 3466, 5687 };
    int result = countOccurance(nums, 123);
    System.out.println(result);
  }
}
