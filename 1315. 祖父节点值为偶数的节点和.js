/* 1315. 祖父节点值为偶数的节点和
给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：

该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）
如果不存在祖父节点值为偶数的节点，那么返回 0 。

 

示例：



输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
输出：18
解释：图中红色节点的祖父节点的值为偶数，蓝色节点为这些红色节点的祖父节点。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
  if(root === null) return 0
  let ans = 0
  if(root.val % 2 === 0){
      if(root.left){
          ans = helper(ans,root.left)
      }
      if(root.right){
          ans = helper(ans,root.right)
      }
  }
  return ans + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right)

  function helper(sum,node){
      return sum + (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0)
  }
};