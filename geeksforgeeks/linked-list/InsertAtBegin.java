/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class InsertAtBegin {

  static Node insertBegin(Node head, int value) {
    Node newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }

  public static void main(String args[]) {
    Node head = null;
    head = insertBegin(head, 30);
    head = insertBegin(head, 20);
    head = insertBegin(head, 10);
    printlist(head);

  }

  public static void printlist(Node head) {
    Node curr = head;
    while (curr != null) {
      System.out.print(curr.data + " ");
      curr = curr.next;
    }
  }
}
