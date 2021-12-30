/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class InsertAtBeginingDoubleLinkedlist {

  public static DoublyNode insertBegin(DoublyNode head, int value) {
    DoublyNode newNode = new DoublyNode(value);
    if(head == null){
      return newNode;
    }
    newNode.next = head;
    head.prev = newNode;
    return newNode;
  }

  public static void main(String[] args) {
    DoublyNode head = new DoublyNode(10);
    DoublyNode temp1 = new DoublyNode(20);
    DoublyNode temp2 = new DoublyNode(30);
    head.next = temp1;
    temp1.prev = head;
    temp1.next = temp2;
    temp2.prev = temp1;
    head = insertBegin(head, 5);
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
