/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class DeleteLastOfDoublyList {

  static DoublyNode delLast(DoublyNode head) {
    if(head == null){
      return null;
    }
    DoublyNode current = head;
    while(current.next != null){
      current = current.next;
    }
    current.prev.next = null;
    return head;
  }

  public static void main(String[] args) {
    DoublyNode head = new DoublyNode(10);
    DoublyNode temp1 = new DoublyNode(20);
    DoublyNode temp2 = new DoublyNode(30);
    head.next = temp1;
    temp1.prev = head;
    temp1.next = temp2;
    temp2.prev = temp1;
    head = delLast(head);
    printlist(head);
  }

  public static void printlist(DoublyNode head) {
    DoublyNode curr = head;
    while (curr != null) {
      System.out.print(curr.data + " ");
      curr = curr.next;
    }
    System.out.println();
  }
}
