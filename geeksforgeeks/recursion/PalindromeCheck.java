/**
 * 
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

public class PalindromeCheck {

  static boolean func(String str, int start, int end) {
    if (start >= end) {
      return true;
    }
    return (str.charAt(start) == str.charAt(end)) && func(str, start + 1, end - 1);
  }

  public static void main(String[] args) {
    String madam = "madam";
    boolean result = func(madam, 0, madam.length() - 1);
    System.out.println(result);
  }

}
