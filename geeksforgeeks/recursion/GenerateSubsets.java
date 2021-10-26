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

  // static void func(String str, int index, String output){
  //   if(str.length() == index){
  //     return;
  //   }
  //   System.out.println(output);
  //   for(int i = index + 1; i < str.length(); i++){
  //     output += Character.toString(str.charAt(i));;
  //     func(str, i,  output);
  //     output = output.substring(0, output.length() - 1);
  //   }
  //   return;
  // }

  public static void main(String[] args) {
    func("AB", 0, "");
  }
}
