import java.util.Arrays;

/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class NBonacciNumber {

  static int func(int num, int length){
    int[] arr = new int[length];

    for(int i = 0; i < length; i++){
      arr[i] = 0;
    }

    arr[num] = 1;
    arr[num-1] = 1;

    for(int i = num+1; i < length; i++){
      arr[i] = 2* arr[i-1] - arr[i-num-1];
    }
    System.out.println(Arrays.toString(arr));
    return num;
  }

  public static void main(String[] args){
    int result = func(3, 8);
    System.out.println(result);
  }
}
