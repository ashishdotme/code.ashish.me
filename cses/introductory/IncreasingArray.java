import java.util.*;
import java.io.*;
/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class IncreasingArray {

  static PrintWriter pw;
  static BufferedReader br;
  static StringTokenizer st;

  static long nl() {
    return Long.parseLong(st.nextToken());
  }

  static int ni() {
    return Integer.parseInt(st.nextToken());
  }

  public static void main(String[] args) throws IOException {
    br = new BufferedReader(new InputStreamReader(System.in));
    pw = new PrintWriter(System.out);
    st = new StringTokenizer(br.readLine());
    long t = nl();
    st = new StringTokenizer(br.readLine());
    long ans = 0;
    long max = 0;
    for (int i = 0; i < t; ++i) {
      long x = nl();
      max = Math.max(max, x);
      ans += max - x;
    }
    pw.print(ans);
    br.close();
    pw.close();
  }
}
