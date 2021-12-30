/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class DeleteHeadOfDoublyList {

  static DoublyNode delHead(DoublyNode head){
    if(head == null){
      return null;
    }
    head = head.next;
    head.prev = null;
    return head;
  }

  public static void main(String[] args){
    DoublyNode head=new DoublyNode(10);
    DoublyNode temp1=new DoublyNode(20);
    DoublyNode temp2=new DoublyNode(30);
    head.next=temp1;
    temp1.prev=head;
    temp1.next=temp2;
    temp2.prev=temp1;
    head=delHead(head);
    printlist(head);
  }

  public static void printlist(DoublyNode head){
    DoublyNode curr=head;
    while(curr!=null){
    System.out.print(curr.data+" ");
    curr=curr.next;
}System.out.println();
}
}
