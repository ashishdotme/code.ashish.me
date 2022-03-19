/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const palindromeLinkedList = head => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  let previous = null
  while (slow) {
    const temp = slow.next
    slow.next = previous
    previous = slow
    slow = temp
  }

  let left = head
  let right = previous
  while (right) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}

const ll1 = new ListNode(1)
ll1.next = new ListNode(2)
ll1.next.next = new ListNode(2)
ll1.next.next.next = new ListNode(1)

console.log(palindromeLinkedList(ll1))
