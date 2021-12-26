import java.util.HashMap;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class CountFrequency {

  static void func(int[] nums) {
    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (int i = 0; i < nums.length; i++) {
      if (map.containsKey(nums[i])) {
        map.put(nums[i], map.get(nums[i]) + 1);
      } else {
        map.put(nums[i], 1);
      }
    }
    for (HashMap.Entry<Integer, Integer> itr : map.entrySet()) {
      System.out.println(itr.getKey() + " " + itr.getValue());
    }
  }

  public static void main(String[] args) {
    int arr[] = new int[] { 15, 16, 27, 27, 28, 15 };
    func(arr);
  }
}
