/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const balancedBinaryTree = root => {
  const getHeight = root => {
    if (root == null) {
      return 0
    }
    let l = getHeight(root.left)
    let r = getHeight(root.right)

    if (l == -1 || r == -1 || Math.abs(l - r) > 1) {
      return -1
    }
    return Math.max(l, r) + 1
  }
  let height = getHeight(root) == -1 ? false : true
  return height
}

test('balancedBinaryTree', () => {
  const t1 = new TreeNode(3)
  t1.left = new TreeNode(9)
  t1.right = new TreeNode(20)
  t1.right.left = new TreeNode(15)
  t1.right.right = new TreeNode(7)

  expect(balancedBinaryTree(t1)).toEqual(true)
})
