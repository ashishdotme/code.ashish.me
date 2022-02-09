/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const courseSchedule = (numCourses, prerequisites) => {
  let map = {}
  for (let i = 0; i < numCourses; i++) {
    map[i] = []
  }
  for (let i = 0; i < prerequisites.length; i++) {
    map[i] = prerequisites[i]
  }
  let visitedSet = new Set()
  const dfs = () => {
    if (visitedSet.has()) {
    }
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(map[i])) {
      return false
    }
  }
  return true
}

console.log(
  courseSchedule(2, [
    [1, 0],
    [0, 1],
  ]),
)
