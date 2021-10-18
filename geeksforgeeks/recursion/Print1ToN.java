public class Print1ToN {

  static void func(int n){
    if(n == 0){
      return;
    }
    func(n-1);
    System.out.println(n);
  }
  public static void main(String[] args){
    func(10);
  }
}
