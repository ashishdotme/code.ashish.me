/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

class MinBinaryHeap {
  constructor(type, size) {
    this.array = [-Infinity]

    this.size = this.size.bind(this)
    this.peek = this.peek.bind(this)
    this.parentIndex = this.parentIndex.bind(this)
    this.parent = this.parent.bind(this)
    this.childIndices = this.childIndices.bind(this)
    this.children = this.children.bind(this)
    this.swap = this.swap.bind(this)
    this.sink = this.sink.bind(this)
    this.swim = this.swim.bind(this)
    this.push = this.push.bind(this)
    this.pop = this.pop.bind(this)
  }

  size() /*: number */ {
    const { array } = this

    return array.length - 1
  }

  peek() /*: number */ {
    const { array } = this

    return array[1]
  }

  parentIndex(index /*: number */) {
    return Math.floor(index / 2)
  }

  parent(index /*: number */) {
    const { array, parentIndex } = this

    return array[parentIndex(index)]
  }

  childIndices(index /*: number */) /*: [number, number] */ {
    return [2 * index, 2 * index + 1]
  }

  children(index /*: number */) /*: [number, number] */ {
    const { childIndices, array } = this

    return childIndices(index).map(i => array[i])
  }

  swap(index0 /*: number*/, index1 /*: number*/) /*: void */ {
    const { array } = this

    const temp = array[index0]
    array[index0] = array[index1]
    array[index1] = temp
  }

  sink(index /*: number*/) /*: void*/ {
    const { array, swap, childIndices, children } = this

    let i = index
    while (i < array.length) {
      const [leftIndex, rightIndex] = childIndices(i)
      const [left, right] = children(i)

      if (leftIndex >= array.length) break

      let smallerChildIndex = leftIndex
      if (rightIndex < array.length && right < left) smallerChildIndex = rightIndex

      if (array[smallerChildIndex] < array[i]) {
        swap(i, smallerChildIndex)
        i = smallerChildIndex
      } else break
    }
  }

  swim(index /*: number*/) /*: void*/ {
    const { parent, parentIndex, array, swap } = this

    let i = index
    while (i > 0 && array[i] < parent(i)) {
      swap(i, parentIndex(i))
      i = parentIndex(i)
    }
  }

  push(x /*: number*/) /*: void*/ {
    const { swim, array } = this

    array.push(x)
    swim(array.length - 1)
  }

  pop() /*: number*/ {
    const { array, sink } = this
    const top = this.peek()
    if (array.length <= 2) {
      array.pop()
    } else {
      array[1] = array.pop()
    }
    sink(1)

    return top
  }
}

const kthLargestElementInAnArray = (nums, k) => {
  const heap = new MinBinaryHeap()
  for (const num of nums) {
    heap.push(num)
    if (heap.size() > k) {
      heap.pop()
    }
  }
  return heap.pop()
}

console.log(kthLargestElementInAnArray([3, 2, 1, 5, 6, 4], 2))
