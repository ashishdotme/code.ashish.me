import java.util.*;
import java.io.*;
/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class WeirdAlgorithm {
  static PrintWriter pw;
  static BufferedReader br;
  static StringTokenizer st;

  static long nl() {
      return Long.parseLong(st.nextToken());
  }

  static int ni() {
      return Integer.parseInt(st.nextToken());
  }

  public static void main(String[] args) throws IOException{
    br = new BufferedReader(new InputStreamReader(System.in));
    pw = new PrintWriter(System.out);
    st = new StringTokenizer(br.readLine());
    long t = ni();
    while(t > 1){
      pw.print(t + " ");
      if(t % 2 == 0){
        t = t / 2;
      } else {
        t = (t * 3) + 1;
      }
    }
    pw.print(1 + " ");
    br.close();
    pw.close();
  }
}
