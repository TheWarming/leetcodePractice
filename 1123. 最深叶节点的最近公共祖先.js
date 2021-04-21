/* 1123. 最深叶节点的最近公共祖先
给你一个有根节点的二叉树，找到它最深的叶节点的最近公共祖先。

回想一下：

叶节点 是二叉树中没有子节点的节点
树的根节点的 深度 为 0，如果某一节点的深度为 d，那它的子节点的深度就是 d+1
如果我们假定 A 是一组节点 S 的 最近公共祖先，S 中的每个节点都在以 A 为根节点的子树中，且 A 的深度达到此条件下可能的最大值。 */

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

 //其实就是找左右深度相同的节点
var lcaDeepestLeaves = function(root) {
  const l = getDep(root.left)
  const r = getDep(root.right)
  if(l === r) return root
  return l > r ? lcaDeepestLeaves(root.left) : lcaDeepestLeaves(root.right)

  function getDep(node){
      if(node === null) return 0
      return Math.max(getDep(node.left),getDep(node.right))+1
  }
};