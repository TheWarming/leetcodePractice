/* 865. 具有所有最深节点的最小子树
给定一个根为 root 的二叉树，每个节点的深度是 该节点到根的最短距离 。

如果一个节点在 整个树 的任意节点之间具有最大的深度，则该节点是 最深的 。

一个节点的 子树 是该节点加上它的所有后代的集合。

返回能满足 以该节点为根的子树中包含所有最深的节点 这一条件的具有最大深度的节点。 */

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
var subtreeWithAllDeepest = function(root) {
  function helper(node){
      if(!node) return 0
      return Math.max(helper(node.left),helper(node.right)) + 1
  }
  if(!root) return null
  const l = helper(root.left)
  const r = helper(root.right)
  if(l === r){
      return root
  }else if(l < r){
      return subtreeWithAllDeepest(root.right)
  }else{
      return subtreeWithAllDeepest(root.left)
  }
};