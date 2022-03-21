/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

var MyStack = function() {
  this.queue = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  const l = this.queue.length
  this.queue.push(x)
  for (let i = 0; i < l; i++) {
    const element = this.queue.shift()
    this.queue.push(element)
  }
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.queue.shift()
}

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue[0]
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.length == 0
}

var obj = new MyStack()
obj.push(3)
obj.push(4)
console.log(obj.queue)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
