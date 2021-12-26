/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MatrixBoundaryTraversal {

  static int R = 4, C = 4;

  static void printBoundary(int mat[][]) {
    if(R == 1){
      for(int i = 0; i < 4; i++){
        System.out.println(mat[0][i]);
      }
    }
    if(C == 1){
      for(int i = 0; i < 4; i++){
        System.out.println(mat[i][0]);
      }
    }
    for(int i = 0; i < 4; i++){
      System.out.println(mat[0][i]);
    }
    for(int i = 1; i < 4; i++){
      System.out.println(mat[i][3]);
    }
    for(int i = 2; i >= 0; i--){
      System.out.println(mat[3][i]);
    }
    for(int i = 2; i > 0; i--){
      System.out.println(mat[i][0]);
    }
  }

  public static void main(String[] args){
    int arr[][] = { { 1, 2, 3, 4 },
        { 5, 6, 7, 8 },
        { 9, 10, 11, 12 },
        { 13, 14, 15, 16 } };
        printBoundary(arr);
  }
}
