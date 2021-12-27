import java.util.Arrays;
import java.util.HashMap;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class LongestSubarrayWithEqualZeroesAndOnes {

  static int func(int[] nums){
    int result = 0;
    int prefixSum = 0;
    HashMap<Integer, Integer> map = new HashMap<>();
    for(int i = 0; i < nums.length; i++){
      nums[i] = nums[i] == 0 ? -1 : 1;
    }
    for(int i = 0; i < nums.length; i++){
      prefixSum += nums[i];
      if(prefixSum == 0){
        result = i + 1;
      }
      if(!map.containsKey(prefixSum + nums.length)){
        map.put(prefixSum + nums.length, i);
      }
      if(map.containsKey(prefixSum + nums.length)){
        result = Math.max(result, i - map.get(prefixSum + nums.length));
      }
    }
    System.out.println(Arrays.toString(nums));
    return result;
  }

  public static void main(String[] args){
    int arr[] = new int[]{1,1,1,1};
    int result = func(arr);
    System.out.println(result);
  }
}
