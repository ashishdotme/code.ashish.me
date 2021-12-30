/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class SearchInLinkedList {

  static int search(Node head, int x){
    if(head == null){
      return -1;
    }
    Node current = head;
    int count = 1;
    while(current != null){
      if(current.data == x){
        return count;
      }
      count += 1;
      current = current.next;
    }
    return -1;
  }

  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    printlist(head);
    System.out.println("Position of element in Linked List: " + search(head, 20));
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
