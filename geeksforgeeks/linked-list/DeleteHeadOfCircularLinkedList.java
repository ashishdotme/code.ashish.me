/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class DeleteHeadOfCircularLinkedList {

  static Node delHead(Node head) {
    if (head == null) {
      return null;
    }
    if (head.next == null) {
      return null;
    }
    Node current = head;
    while (current.next != head) {
      current = current.next;
    }
    current.next = head.next;
    return current.next;
  }

  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);
    head.next.next.next.next = head;
    head = delHead(head);
    printlist(head);
  }

  public static void printlist(Node head) {
    if (head == null)
      return;
    Node r = head;
    do {
      System.out.print(r.data + " ");
      r = r.next;
    } while (r != head);
  }
}
