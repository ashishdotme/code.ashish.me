/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const binaryTreeInorderTraversal = root => {
  const result = []
  const helper = root => {
    if (!root) {
      return
    }
    if (root.left) {
      helper(root.left)
    }
    result.push(root.val)
    if (root.right) {
      helper(root.right)
    }
  }
  helper(root)
  return result
}

const t1 = new TreeNode(3)
t1.left = new TreeNode(9)
t1.right = new TreeNode(20)
t1.right.left = new TreeNode(15)
t1.right.right = new TreeNode(7)
console.log(binaryTreeInorderTraversal(t1))
