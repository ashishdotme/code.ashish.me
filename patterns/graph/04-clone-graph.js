/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

function TreeNode(val = 0, neighbors = []) {
  this.val = val
  this.neighbors = neighbors
}

const cloneGraph = node => {
  const map = new Map()
  const dfs = node => {
    if (map.has(node)) {
      return map.get(node)
    }
    const copy = new Node(node.val)
    map.set(node, copy)
    for (const neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor))
    }
    return copy
  }
  return dfs(node)
}

console.log(
  cloneGraph([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ]),
)
