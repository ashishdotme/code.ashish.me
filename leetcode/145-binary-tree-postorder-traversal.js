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

const binaryTreePostorderTraversal = root => {
  let result = []
  const helper = root => {
    if (root == null) {
      return
    }
    helper(root.left)
    helper(root.right)
    result.push(root.val)
  }
  helper(root)
  return result
}

const t1 = new TreeNode(1)
t1.left = new TreeNode(2)
t1.right = new TreeNode(3)
t1.left.right = new TreeNode(5)
t1.right.right = new TreeNode(4)
console.log(binaryTreePostorderTraversal(t1))
