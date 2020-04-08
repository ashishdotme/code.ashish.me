/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}

function copyListWithRandomPointer(head) {
  const map = new Map()
  const copied = new Node()
  let current = head
  let copiedCurrent = copied

  while(current){
    const newNode = new Node(current.val)
    map.set(current, newNode)
    copiedCurrent.next = newNode
    copiedCurrent = copiedCurrent.next
    current = current.next
  }

  current = head
  copiedCurrent = copied.next

  while(current){
    if(current.random){
      copiedCurrent.random = map.get(current.random)
    }
    current = current.next
    copiedCurrent = copiedCurrent.next
  }

  return copied.next
}

const ll1 = new Node(1)
ll1.random = ll1
ll1.next = new Node(2)
ll1.next.random = ll1

const ll2 = new Node(1)
ll2.random = ll2
ll2.next = new Node(2)
ll2.next.random = ll2

test('copy List With Random Pointer', () => {
  expect(copyListWithRandomPointer(ll1)).toEqual(ll2)
})
