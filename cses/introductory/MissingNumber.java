import java.util.*;
import java.io.*;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MissingNumber {

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
    long t = ni();
    st = new StringTokenizer(br.readLine());
    long actualSum = 0;
    for (int i = 0; i + 1 < t; ++i) {
      actualSum += nl();
    }
    long totalSum = (t * (t + 1))/2;
    pw.print(totalSum-actualSum);
    br.close();
    pw.close();
  }
}
