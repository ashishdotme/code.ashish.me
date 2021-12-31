/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class DeleteKthOfCircularList {

  static Node deleteKth(Node head,int k){
    if(head == null){
      return null;
    }
    if(k == 1){
      return deleteHead(head);
    }
    Node current = head;
    for(int i = 1;i<k;i++){
      current = current.next;
    }
    current.next = current.next.next;
    return head;
  }

  static Node deleteHead(Node head){
    head.next = head.next.next;
    head.data = head.next.data;
    return head;
  }

  public static void main(String[] args) {
    Node head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);
    head.next.next.next.next = head;
    head = deleteKth(head, 3);
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
