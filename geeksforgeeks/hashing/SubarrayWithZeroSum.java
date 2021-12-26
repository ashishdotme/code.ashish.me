import java.util.HashSet;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class SubarrayWithZeroSum {

  static int func(int[] nums){
    HashSet<Integer> hs = new HashSet<>();
    int prefixSum = 0;
    hs.add(0);
    for(int i = 0; i < nums.length; i++){
      prefixSum += nums[i];
      if(hs.contains(prefixSum)){
        System.out.println(hs);
        return 1;
      }
      hs.add(prefixSum);
    }
    return 0;
  }

  public static void main(String[] args){
    int[] arr = new int[] {-3, 4, -3, -1, 1};
    int result = func(arr);
    System.out.println(result);
  }
}
