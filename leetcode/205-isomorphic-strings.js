/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const isomorphicStrings = (s, t) => {
  let smap = {}
  let tmap = {}
  for (let i = 0; i < s.length; i++) {
    if ((smap[s[i]] && smap[s[i]] !== t[i]) || (tmap[t[i]] && tmap[t[i]] != s[i])) {
      return false
    }
    smap[s[i]] = t[i]
    tmap[t[i]] = s[i]
  }
  return true
}

console.log(isomorphicStrings('egg', 'add'))
