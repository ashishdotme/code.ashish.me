import java.util.HashMap;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class DistinctElementsInWindow {

  static void printDistinct(int nums[], int k) {
    HashMap<Integer, Integer> hm = new HashMap<>();
    int result = 0;
    for(int i = 0; i < k ; i++){
      if(hm.containsKey(nums[i])){
        hm.put(nums[i], hm.get(nums[i]) + 1);
      } else {
        result++;
        hm.put(nums[i], 1);
      }
    }
    System.out.println("Distinct Elements - " + hm.size());
    for(int i = k; i < nums.length; i++){
      if(hm.containsKey(nums[i-k])){
        hm.put(nums[i-k], hm.get(nums[i-k]) - 1);
      }
      if(hm.get(nums[i-k]) == 0){
        hm.remove(nums[i-k]);
      }
      if(hm.containsKey(nums[i])){
        hm.put(nums[i], hm.get(nums[i]) + 1);
      } else {
        hm.put(nums[i], 0);
      }
      System.out.println("Distinct Elements - " + hm.size());
    }
  }

  public static void main(String[] args){
    int arr[] = new int[]{10, 10, 5, 3, 20, 5};
    int k=4;
    printDistinct(arr, k);
  }
}
