/* 94. 二叉树的中序遍历
给定一个二叉树的根节点 root ，返回它的 中序 遍历。

 

示例 1：


输入：root = [1,null,2,3]
输出：[1,3,2] */

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
var inorderTraversal = function(root) {
  const ans = []
  helper(root)
  return ans
  function helper(node){
      if(node === null) return
      helper(node.left)
      ans.push(node.val)
      helper(node.right)
  }
};


// 重点： 非递推！
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const ans = []
  const stack = []
  while(root || stack.length > 0){
      while(root){
          stack.push(root)
          root = root.left
      }
      root = stack.pop();
      ans.push(root.val);
      root = root.right
  }
  return ans
};