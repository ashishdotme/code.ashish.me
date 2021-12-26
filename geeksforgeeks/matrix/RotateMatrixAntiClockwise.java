/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class RotateMatrixAntiClockwise {

  static void func(int arr[][]) {
    for (int i = 0; i < 4; i++) {
      for (int j = i + 1; j < 4; j++) {
        int temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
      }
    }

    for (int i = 0; i < 4; i++) {
      int start = 0;
      int end = 3;
      while(start <= end){
        int temp = arr[start][i];
        arr[start][i] = arr[end][i];
        arr[end][i] = temp;
        start++;
        end--;
      }
    }

    for (int i = 0; i < 4; i++) {
      for (int j = 0; j < 4; j++) {
        System.out.print(arr[i][j] + " ");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    int arr[][] = { { 1, 2, 3, 4 },
        { 5, 6, 7, 8 },
        { 9, 10, 11, 12 },
        { 13, 14, 15, 16 } };
    func(arr);
  }
}
