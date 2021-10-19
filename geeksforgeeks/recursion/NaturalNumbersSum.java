public class NaturalNumbersSum {

  static int func(int n) {
    if (n == 0) {
      return 0;
    }
    return n + func(n - 1);
  }

  public static void main(String[] args) {
    int result = func(3);
    System.out.println(result);
  }
}
