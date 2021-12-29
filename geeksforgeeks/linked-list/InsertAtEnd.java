/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class InsertAtEnd {

  static Node insertEnd(Node head, int value) {
    Node newNode = new Node(value);
    if (head == null) {
      return newNode;
    }
    Node current = head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
    return head;
  }

  public static void main(String args[]) {
    Node head = null;
    head = insertEnd(head, 30);
    head = insertEnd(head, 20);
    head = insertEnd(head, 10);
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
