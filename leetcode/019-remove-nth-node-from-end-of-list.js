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

const removeNthNodeFromEndOfList = (head, n) => {
  let clone = head
  let root = head
  let length = 0
  while (clone) {
    clone = clone.next
    length += 1
  }
  let count = length - n
  if (count == 1) {
    return head.next
  }
  while (root && count > 1) {
    root = root.next
    count -= 1
  }
  root.next = root.next && root.next.next
  return head
}

const ll1 = new ListNode(1)
ll1.next = new ListNode(2)
ll1.next.next = new ListNode(3)
ll1.next.next.next = new ListNode(4)
ll1.next.next.next.next = new ListNode(5)

let result = removeNthNodeFromEndOfList(ll1, 2)

while (result) {
  console.log(result.val)
  result = result.next
}
