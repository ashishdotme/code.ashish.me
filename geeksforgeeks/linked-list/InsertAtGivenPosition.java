/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class InsertAtGivenPosition {

  static Node insertAtPosition(Node head, int value, int position) {
    Node newNode = new Node(value);
    if(position == 1){
      newNode.next = head;
      return newNode;
    }
    if (head == null) {
      return newNode;
    }
    Node current = head;
    for(int i = 0; i < position-2; i++){
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    return head;
  }

  public static void main(String args[]) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);
    head = insertAtPosition(head, 90, 2);
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
