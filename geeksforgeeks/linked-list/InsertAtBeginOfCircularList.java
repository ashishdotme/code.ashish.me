/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class InsertAtBeginOfCircularList {

  static Node insertBegin(Node head, int x) {
    Node newNode = new Node(x);
    if (head == null) {
      newNode.next = newNode;
    } else {
      Node current = head;
      while(current.next != head){
        current = current.next;
      }
      current.next = newNode;
      newNode.next = head;
    }
    return newNode;
  }

  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = head;
    head = insertBegin(head, 15);
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
