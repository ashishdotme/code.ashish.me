/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class InsertAtEndOfCircularList {

  static Node insertEnd(Node head, int x) {
    Node newNode = new Node(x);
    if(head == null){
      newNode.next = newNode;
      return newNode;
    }
    Node current = head;
    while(current.next != head){
      current = current.next;
    }
    current.next = newNode;
    newNode.next = head;
    return head;
  }

  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = head;
    head = insertEnd(head, 15);
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
