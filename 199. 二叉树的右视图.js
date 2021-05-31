/* 199. 二叉树的右视图
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <--- */
  /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const ans = []
  if(!root) return ans
  const arr = [root]
  while(arr.length){
      const len = arr.length
      for(let i = 0; i < len; i++){
          const node = arr.shift()
          node.left&&arr.push(node.left)
          node.right&&arr.push(node.right)
          if(i === len-1){
              ans.push(node.val)
          }
      }
  }
  return ans
};