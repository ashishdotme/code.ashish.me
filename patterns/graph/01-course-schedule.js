/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const courseSchedule = (numCourses, prerequisites) => {
  let map = {}
  const adj = [...Array(numCourses)].map(r => [])
  for (let [u, v] of prerequisites) {
    adj[v].push(u)
  }
  let visitedSet = new Set()
  const dfs = e => {
    if (visitedSet.has(e)) {
      return false
    }
    if (adj[e].length == 0) {
      return true
    }
    visitedSet.add(e)
    for (const c of adj[e]) {
      if (!dfs(c)) {
        return false
      }
    }
    visitedSet.delete(e)
    adj[e] = []
    return true
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false
    }
  }
  return true
}

console.log(courseSchedule(2, [[0, 1]]))
