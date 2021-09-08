/* 1670. 设计前中后队列
请你设计一个队列，支持在前，中，后三个位置的 push 和 pop 操作。

请你完成 FrontMiddleBack 类：

FrontMiddleBack() 初始化队列。
void pushFront(int val) 将 val 添加到队列的 最前面 。
void pushMiddle(int val) 将 val 添加到队列的 正中间 。
void pushBack(int val) 将 val 添加到队里的 最后面 。
int popFront() 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
int popMiddle() 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
int popBack() 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
请注意当有 两个 中间位置的时候，选择靠前面的位置进行操作。比方说：

将 6 添加到 [1, 2, 3, 4, 5] 的中间位置，结果数组为 [1, 2, 6, 3, 4, 5] 。
从 [1, 2, 3, 4, 5, 6] 的中间位置弹出元素，返回 3 ，数组变为 [1, 2, 4, 5, 6] 。
 

示例 1：

输入：
["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
[[], [1], [2], [3], [4], [], [], [], [], []]
输出：
[null, null, null, null, null, 1, 3, 4, 2, -1]

解释：
FrontMiddleBackQueue q = new FrontMiddleBackQueue();
q.pushFront(1);   // [1]
q.pushBack(2);    // [1, 2]
q.pushMiddle(3);  // [1, 3, 2]
q.pushMiddle(4);  // [1, 4, 3, 2]
q.popFront();     // 返回 1 -> [4, 3, 2]
q.popMiddle();    // 返回 3 -> [4, 2]
q.popMiddle();    // 返回 4 -> [2]
q.popBack();      // 返回 2 -> []
q.popFront();     // 返回 -1 -> [] （队列为空） */

var FrontMiddleBackQueue = function() {
  this.arr = []
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.arr.unshift(val)
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  this.arr.splice(Math.floor(this.arr.length/2),0,val)
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.arr.push(val)
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popFront = function() {
  if(this.arr.length === 0) return -1
  return this.arr.shift()
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if(this.arr.length === 0) return -1

  //mid = Math.floor((this.arr.length-1)/2)   非常强
  const mid =  Math.floor((this.arr.length-1)/2)
  return this.arr.splice(mid,1)
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popBack = function() {
  if(this.arr.length === 0) return -1
  return this.arr.pop()
};

/**
* Your FrontMiddleBackQueue object will be instantiated and called as such:
* var obj = new FrontMiddleBackQueue()
* obj.pushFront(val)
* obj.pushMiddle(val)
* obj.pushBack(val)
* var param_4 = obj.popFront()
* var param_5 = obj.popMiddle()
* var param_6 = obj.popBack()
*/