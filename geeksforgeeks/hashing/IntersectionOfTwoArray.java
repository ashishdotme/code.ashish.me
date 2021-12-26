import java.util.HashMap;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class IntersectionOfTwoArray {

  static int intersection(int arr1[], int arr2[]) {
    int result = 0;
    HashMap<Integer, Integer> map = new HashMap<>();
    for(int i = 0; i < arr1.length; i++){
      map.put(arr1[i], arr1[i]);
    }
    for(int i = 0; i < arr2.length; i++){
      if(map.containsKey(arr2[i])){
        result += 1;
        map.remove(arr2[i]);
      }
    }
    return result;
  }

  public static void main(String[] args){
    int arr1[] = new int[]{15, 17, 27, 27, 28, 15};
    int arr2[] = new int[]{16, 17, 28, 17, 31, 17};
    int result = intersection(arr1, arr2);
    System.out.println(result);
  }
}
