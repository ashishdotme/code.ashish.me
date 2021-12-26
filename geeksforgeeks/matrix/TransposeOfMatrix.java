/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class TransposeOfMatrix {

  static void printTranspose(int mat[][]) {
    for (int i = 0; i < 4; i++) {
      for (int j = i+ 1; j < 4; j++) {
        int temp = mat[j][i];
        mat[j][i] = mat[i][j];
        mat[i][j] = temp;

      }
    }
    for (int i = 0; i < 4; i++) {
      for (int j = 0; j < 4; j++) {
        System.out.println(mat[i][j]);
      }
    }
  }

  public static void main(String[] args) {
    int arr[][] = { { 1, 2, 3, 4 },
        { 5, 6, 7, 8 },
        { 9, 10, 11, 12 },
        { 13, 14, 15, 16 } };
    printTranspose(arr);
  }
}
