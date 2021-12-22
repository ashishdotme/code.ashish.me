/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class SquareRoot {

  static int func(int num) {
    int start = 0;
    int end = num;
    int ans = -1;
    while (start < end) {
      int mid = (start + end) / 2;
      int square = mid * mid;
      if (square == num) {
        return mid;
      } else {
        if (square < num) {
          start = mid + 1;
          ans = mid;
        } else {
          end = end - 1;
        }
      }
    }
    return ans;
  }

  public static void main(String[] args) {
    int result = func(181);
    System.out.println(result);
  }
}
