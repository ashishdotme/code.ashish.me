public class SecondLargestElement {
  
  static int func(int[] nums){
    int largest = 0;
    int secondLargest = -1;
    for(int i = 0;i < nums.length; i++){
      if(nums[i] > nums[largest]){
        secondLargest = largest;
        largest = i;
      } else if (nums[i]  < nums[largest]){
        if(secondLargest == -1 || nums[i] > nums[secondLargest]){
          secondLargest = i;
        }
      }
    }
    return secondLargest;
  }
  public static void main(String[] args){
    int[] nums = {10,20,30,40};
    int result = func(nums);
    System.out.println(result);
  }
}
