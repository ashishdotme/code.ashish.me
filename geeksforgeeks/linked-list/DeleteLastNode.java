/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class DeleteLastNode {

  static Node delHead(Node head) {
    if (head == null) {
      return null;
    }
    if (head.next == null) {
      return head;
    }
    Node current = head;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
    return head;
  }

  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    printlist(head);
    head = delHead(head);
    printlist(head);
  }

  public static void printlist(Node head) {
    Node curr = head;
    while (curr != null) {
      System.out.print(curr.data + " ");
      curr = curr.next;
    }
    System.out.println();
  }
}
