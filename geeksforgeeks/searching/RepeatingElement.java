import java.util.Arrays;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class RepeatingElement {

  static int func(int[] nums) {
    boolean visited[] = new boolean[nums.length];
    for(int i = 0; i < nums.length; i++){
      if(visited[nums[i]]){
        return nums[i];
      }
      visited[nums[i]] = true;
    }
    System.out.println(Arrays.toString(visited));
    return -1;
  }

  public static void main(String[] args){
    int[] nums = new int[] {0, 2, 1, 3, 2, 2};
    int result = func(nums);
    System.out.println(result);
  }
}
