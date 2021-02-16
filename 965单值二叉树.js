/* 965. 单值二叉树
如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

只有给定的树是单值二叉树时，才返回 true；否则返回 false。

 

示例 1：



输入：[1,1,1,1,1,null,1]
输出：true */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  let flag = true;
  const helper = (node,v) => {
      if(!node) return
      if(node.val !== v) {
          flag =false
          return
      }
      helper(node.left,v);
      helper(node.right,v)
  }
  helper(root,root.val)
  return flag

};