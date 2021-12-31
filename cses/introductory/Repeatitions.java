import java.util.*;
import java.io.*;
/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class Repeatitions {


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
    String x = br.readLine();
    int count = 0;
    int result = 1;
    char l = 'A';
    for (int i = 0; i < x.length(); ++i) {
      if(x.charAt(i) == l){
        ++count;
        result = Math.max(result, count);
      } else {
        l = x.charAt(i);
        count = 1;
      }
    }
    pw.print(result);
    br.close();
    pw.close();
  }
}
