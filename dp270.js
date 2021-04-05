// 155. Min Stack
// Easy

// 4695

// 435

// Add to List

// Share
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

class MinStack {
  constructor() {
    this.stack = [];
  }
  push(x) {
    const min = this.stack.length ? this.stack[this.stack.length - 1].min : x;
    this.stack.push({ val: x, min: Math.min(min, x) });
  }
  pop() {
    return this.stack.pop();
  }
  top() {
    if (this.stack.length) return this.stack[this.stack.length - 1].val;
  }
  getMin() {
    if (this.stack.length) return this.stack[this.stack.length - 1].min;
  }
}

const m = new MinStack();
m.push(1);
m.push(2);
m.push(-3);
m.push(0);
console.log(m);
