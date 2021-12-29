/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class TraversingLinkedListRecursively {

  static void printlist(Node root) {
    if(root == null){
      return;
    }
    System.out.println(root.data);
    printlist(root.next);
  }

  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);
    printlist(head);
  }
}
