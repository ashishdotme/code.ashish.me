import java.util.HashSet;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class LongestConsecutiveSequence {

  static int func(int[] nums){
    int result = 0;
    int count = 0;
    HashSet<Integer> hs = new HashSet<>();
    for(int i = 0; i < nums.length;i++){
      hs.add(nums[i]);
    }
    for(int i = 0; i < nums.length; i++){
      if(!hs.contains(nums[i] - 1)){
        count = 1;
        while(hs.contains(nums[i] + count)){
          count++;
        }
        result = Math.max(result, count);
      }
    }
    return result;
  }

  public static void main(String[] args){
    int arr[] = new int[]{1,9,3,4,2,20};
    int result = func(arr);
    System.out.println(result);
  }
}
