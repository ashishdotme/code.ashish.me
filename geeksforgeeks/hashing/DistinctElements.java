import java.util.HashSet;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class DistinctElements {

  static int func(int[] nums){
    HashSet<Integer> map = new HashSet<Integer>();
    for(int i = 0; i < nums.length; i++){
      map.add(nums[i]);
    }
    return map.size();
  }

  public static void main(String[] args){
    int arr[] = new int[]{15, 16, 27, 27, 28, 15};
    int result = func(arr);
    System.out.println(result);
  }
}
