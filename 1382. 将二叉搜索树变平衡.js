/* 1382. 将二叉搜索树变平衡
给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

如果有多种构造方法，请你返回任意一种。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
  const arr = []
  function helper(node){
      if(!node) return
      helper(node.left)
      arr.push(node.val)
      helper(node.right)
  }
  helper(root)

  function cT(l,r){
      if(l > r) return null
      const mid = parseInt((r-l)/2) + l
      const v = arr[mid]
      const node = new TreeNode(v)
      node.left = cT(l,mid-1)
      node.right = cT(mid+1,r)
      return node
  }

  return cT(0,arr.length-1)
};