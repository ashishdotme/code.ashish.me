import java.util.HashMap;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class LongestSubarrayWithGivenSum {

  static int func(int[] nums, int target){
    int prefixSum = 0;
    int res = 0;
    HashMap<Integer, Integer> hs = new HashMap<>();
    for(int i = 0; i < nums.length; i++){
      prefixSum += nums[i];
      if(prefixSum == target){
        res = i + 1;
      }
      if(!hs.containsKey(prefixSum)){
        hs.put(prefixSum, i);
      }
      if(hs.containsKey(prefixSum - target)){
        res = Math.max(res, i - hs.get(prefixSum-target));
      }
    }
    return res;
  }

  public static void main(String[] args){
    int arr[] = new int[]{8, 3, 7};
    int sum = 15;
    int result = func(arr, sum);
    System.out.println(result);
  }
}
