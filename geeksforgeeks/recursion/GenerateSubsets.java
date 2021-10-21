/**
 * 
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

public class GenerateSubsets {

  static void func(String str, int index, String output){
    if(str.length() == index){
      System.out.println(output);
      return;
    }
    func(str, index + 1, output);
    func(str, index + 1, output + str.charAt(index));
  }

  public static void main(String[] args) {
    func("ABC", 0, "");
  }
}
