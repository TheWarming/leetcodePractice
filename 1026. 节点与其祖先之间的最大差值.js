/* 1026. 节点与其祖先之间的最大差值
给定二叉树的根节点 root，找出存在于 不同 节点 A 和 B 之间的最大值 V，其中 V = |A.val - B.val|，且 A 是 B 的祖先。

（如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先） */

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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  if(!root) return
  let ans = -Number.MAX_VALUE
  function helper(node,max,min){
      if(!node){
          ans = Math.max(max - min,ans)
          return
      }
      max = Math.max(max,node.val)
      min = Math.min(min,node.val)
      helper(node.left,max,min)
      helper(node.right,max,min)
  }
  helper(root,root.val,root.val)
  return ans
};