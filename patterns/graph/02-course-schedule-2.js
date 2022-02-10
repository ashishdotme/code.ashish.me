/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const courseSchedule2 = (numCourses, prerequisites) => {
  let adj = {}
  for (let i = 0; i < numCourses; i++) {
    adj[i] = []
  }
  for (let [v, e] of prerequisites) {
    adj[v].push(e)
  }
  let cycle = new Set()
  let visited = new Set()
  let output = []
  const dfs = node => {
    if (cycle.has(node)) {
      return false
    }
    if (visited.has(node)) {
      return true
    }
    cycle.add(node)
    for (const v of adj[node]) {
      if (!dfs(v)) {
        return false
      }
    }
    cycle.delete(node)
    visited.add(node)
    output.push(node)
    return true
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return []
    }
  }
  return output
}

console.log(courseSchedule2(2, [[1, 0]]))
