import java.util.HashSet;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class SubarrayWithGivenSum {

  static int func(int[] nums, int target){
    int prefixSum = 0;
    HashSet<Integer> hs = new HashSet<Integer>();
    for(int i = 0; i < nums.length;i++) {
      if(prefixSum == target) {
        return 1;
      }
      prefixSum += nums[i];
      if(hs.contains(prefixSum - target) == true){
        return 1;
      }
      hs.add(prefixSum);
    }
    return -1;
  }

  public static void main(String[] args){
    int arr[] = new int[]{5, 8, 6, 13, 3, -1};
    int sum = 22;
    int result = func(arr, sum);
    System.out.println(result);
  }
}
