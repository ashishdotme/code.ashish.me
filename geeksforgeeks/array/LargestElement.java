import java.util.ArrayList;

class LargestElement {

  static int func(int[] nums) {
    int result = 0;
    for (int i = 1; i < nums.length; i++) {
      if(nums[i] > nums[result]){
        result = i;
      }
    }
    return result;
  }

  public static void main(String args[]) {
    int[] nums = {10, 20, 30, 40};
    int result = func(nums);
    System.out.println(result);
  }
}