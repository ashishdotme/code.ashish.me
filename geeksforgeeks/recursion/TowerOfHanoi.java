public class TowerOfHanoi {
  static void func(int n, String a, String b, String c) {
    if (n == 1) {
      System.out.println("Move 1 disk from " + a + " to " + c);
      return;
    }
    func(n - 1, a, c, b);
    System.out.println("Move disk " + n + " from "+ a + " to " + c);
    func(n - 1, b, a, c);
  }

  public static void main(String[] args) {
    func(3, "Tower A", "Tower B", "Tower C");
  }
}
