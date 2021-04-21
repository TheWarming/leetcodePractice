/* 814. 二叉树剪枝
给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。

返回移除了所有不包含 1 的子树的原二叉树。

( 节点 X 的子树为 X 本身，以及所有 X 的后代。) */

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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  function helper(node){
      if(node === null) return 0
      const l = helper(node.left)
      const r = helper(node.right)
      if(l === 0){
          node.left = null
      }
      if(r === 0){
          node.right = null
      }
      if(l !== 0 || r !== 0){
          return 1
      }else{
          return node.val
      }
  }
  helper(root)
  if(root.val === 0 && root.left === null && root.right === null) return null
  return root
};

var pruneTree = function(root) {
  if(root === null) return null
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  if(root.val === 0 && root.left === null && root.right === null) return null
  return root
};