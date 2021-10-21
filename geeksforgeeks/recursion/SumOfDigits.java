/**
 * 
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

public class SumOfDigits {

  static int func(int n) {
    if (n == 0) {
      return 0;
    }
    return n % 10 + func(n / 10);
  }

  public static void main(String[] args) {
    int result = func(501);
    System.out.println(result);
  }
}
