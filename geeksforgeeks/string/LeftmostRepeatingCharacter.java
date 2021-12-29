import java.util.Arrays;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class LeftmostRepeatingCharacter {

  static final int CHAR=256;
  static int leftMost(String str){
    int[] fIndex = new int[CHAR];
    Arrays.fill(fIndex,-1);
    int res=Integer.MAX_VALUE;
    for(int i = 0;i < str.length();i++){
      int firstIndex = fIndex[str.charAt(i)];
      if(firstIndex == -1){
        fIndex[str.charAt(i)] = i;
      } else {
        res = Math.min(res, firstIndex);
      }
    }
    return (res == Integer.MAX_VALUE) ? -1 : res;
  }

  public static void main(String[] args) {
    String str = "geeksforgeeks";
    System.out.println("Index of leftmost repeating character:");
    System.out.println(leftMost(str));
  }
}
