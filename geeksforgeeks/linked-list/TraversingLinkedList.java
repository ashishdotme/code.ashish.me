/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class Node {
  int data;
  Node next;

  Node(int x) {
    data = x;
    next = null;
  }
}

class TraversingLinkedList {

  static void printlist(Node root) {
    Node current = root;
    while (current != null) {
      System.out.println(current.data);
      current = current.next;
    }
  }

  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);
    printlist(head);
  }
}
