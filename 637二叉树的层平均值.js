/* 637. 二叉树的层平均值
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

 

示例 1：

输入：
    3
   / \
  9  20
    /  \
   15   7
输出：[3, 14.5, 11]
解释：
第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 

提示：

节点值的范围在32位有符号整数范围内。 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const stack = [];
  const temp = [];
  const res = [];
  let index = 0
  let count = 0;
  stack.push(root)
  while(stack.length){
      const node = stack.pop();
      if(res[index] === undefined) res[index] = 0;
      res[index] += node.val;
      count++;
      if(node.left){
          temp.push(node.left)
      }
      if(node.right){
          temp.push(node.right)
      }
      if(!stack.length){
          res[res.length - 1] = res[res.length - 1]/count;
          count = 0;
          stack.push(...temp);
          temp.length = 0;
          index++
      }
  }
  return res
}

0//化简！！！！！！！！！不一定要用栈  可以用队列！！！！！
var averageOfLevels = function(root) {
  const queue = [];
  const res = [];
  queue.push(root)
  while(queue.length){
      const size = queue.length;
      let sum = 0;
      for(let i = 0; i < size; i++){
          const node = queue.shift();
          sum += node.val;
          node.left&&queue.push(node.left)
          node.right&&queue.push(node.right)
      }
      res.push(sum/size)
  }
  return res
};