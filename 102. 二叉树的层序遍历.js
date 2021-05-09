/* 102. 二叉树的层序遍历
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
] */

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  const queue = [root]
  const ans = []
  while(queue.length){
      const len = queue.length
      const arr = []
      for(let i = 0; i < len; i++){
          const node = queue.shift()
          arr.push(node.val)
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }   
      ans.push(arr)
  }
  return ans
}