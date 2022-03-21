/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

const intersectionOfTwoLinkedLists = (headA, headB) => {
  let l1 = headA
  let l2 = headB
  while (l1 != l2) {
    if (!l1) {
      l1 = headB
    } else {
      l1 = l1.next
    }
    if (!l2) {
      l2 = headA
    } else {
      l2 = l2.next
    }
  }
  return l1
}

const ll1 = new ListNode(4)
ll1.next = new ListNode(1)
ll1.next.next = new ListNode(8)
ll1.next.next.next = new ListNode(4)
ll1.next.next.next.next = new ListNode(5)

const ll2 = new ListNode(5)
ll2.next = new ListNode(6)
ll2.next.next = new ListNode(1)
ll2.next.next.next = new ListNode(8)
ll2.next.next.next.next = new ListNode(4)
ll2.next.next.next.next.next = new ListNode(5)

console.log(intersectionOfTwoLinkedLists(ll1, ll2))
