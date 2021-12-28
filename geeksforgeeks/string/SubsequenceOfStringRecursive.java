import java.util.Scanner;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class SubsequenceOfStringRecursive {

  static boolean isSubSeq(String s1, String s2, int n, int m){
    if(m == 0){
      return true;
    }
    if(n == 0){
      return false;
    }
    if(s1.charAt(n-1) == s2.charAt(m-1)){
      return isSubSeq(s1, s2, n-1, m-1);
    } else {
      return isSubSeq(s1, s2, n-1, m);
    }
  }

  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
		int n, m;
		n = sc.nextInt();
		m = sc.nextInt();

		String s1, s2;
		s1 = sc.next();
		s2 = sc.next();

		System.out.println(isSubSeq(s1, s2, n, m));
  }
}
