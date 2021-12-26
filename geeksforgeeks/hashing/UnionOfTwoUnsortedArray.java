import java.util.HashSet;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class UnionOfTwoUnsortedArray {

  static int union(int arr1[], int arr2[]) {
    HashSet<Integer> hs = new HashSet<>();
    for(int i = 0;i < arr1.length; i++){
      hs.add(arr1[i]);
    }
    for(int i = 0;i < arr2.length; i++){
      hs.add(arr2[i]);
    }
    return hs.size();
  }

  public static void main(String[] args){
    int arr1[] = new int[]{2, 8, 3, 5, 6};
    int arr2[] = new int[]{4, 8, 3, 6, 1};
    int result = union(arr1, arr2);
    System.out.println(result);
  }
}
