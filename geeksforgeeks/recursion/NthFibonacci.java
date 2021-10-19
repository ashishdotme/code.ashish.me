public class NthFibonacci {

  static int func(int n) {
    if (n == 0) {
      return 0;
    }
    if (n == 1) {
      return 1;
    }
    return func(n - 1) + func(n - 2);
  }

  public static void main(String[] args) {
    int result = func(9);
    System.out.println(result);
  }
}
