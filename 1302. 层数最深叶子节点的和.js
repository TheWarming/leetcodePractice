/* 1302. 层数最深叶子节点的和
给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。

 

示例 1：



输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
输出：15 */

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
var deepestLeavesSum = function(root) {
  const stack = [root];
  let ans = 0
  while(stack.length){
      let len = stack.length;
      ans = 0;
      while(len){
          const node = stack.shift();
          len--;
          node.left && stack.push(node.left);
          node.right && stack.push(node.right);
          ans += node.val
      }
  }
  return ans
};