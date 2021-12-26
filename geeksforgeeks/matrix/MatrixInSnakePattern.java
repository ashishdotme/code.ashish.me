import java.util.Arrays;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MatrixInSnakePattern {

  static int R = 4, C = 4;

  static void printSnake(int mat[][]) {
    for (int i = 0; i < 4; i++) {
      if (i % 2 != 0) {
        for (int j = 3; j >= 0; j--) {
          System.out.println(mat[i][j]);
        }
      } else {
        for (int j = 0; j < 4; j++) {
          System.out.println(mat[i][j]);
        }
      }
    }
  }

  public static void main(String[] args) {
    int arr[][] = { { 1, 2, 3, 4 },
        { 5, 6, 7, 8 },
        { 9, 10, 11, 12 },
        { 13, 14, 15, 16 } };
    printSnake(arr);
  }
}
