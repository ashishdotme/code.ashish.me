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

const mergeKSortedLists = lists => {
  if (lists.length == 0) {
    return l
  }
  const helper = (l1, l2) => {
    if (!l1 || !l2) {
      return l1 || l2
    }
    let node = {}
    const clone = node
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        node.next = l1
        l1 = l1.next
      } else {
        node.next = l2
        l2 = l2.next
      }
      node = node.next
    }
    if (l1) {
      node.next = l1
    }
    if (l2) {
      node.next = l2
    }
    return clone.next
  }
  let root = lists[0]
  for (let i = 1; i < lists.length; i++) {
    root = helper(root, lists[i])
  }
  return root
}

const ll1 = new ListNode(1)
ll1.next = new ListNode(4)
ll1.next.next = new ListNode(5)

const ll2 = new ListNode(1)
ll2.next = new ListNode(3)
ll2.next.next = new ListNode(4)

const ll3 = new ListNode(2)
ll3.next = new ListNode(6)

let result = mergeKSortedLists([ll1, ll2, ll3])

while (result) {
  console.log(result.val)
  result = result.next
}
