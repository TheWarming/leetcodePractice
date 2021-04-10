/* 513. 找树左下角的值
给定一个二叉树，在树的最后一行找到最左边的值。

示例 1:

输入:

    2
   / \
  1   3

输出:
1 */

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
var findBottomLeftValue = function(root) {
  const queue = [root];
  let ans = null;
  while(queue.length !== 0){
      let len = queue.length;
      ans = queue[0].val
      while(len !== 0){
          len--;
          const node = queue.shift();
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
  }
  return ans
};

var findBottomLeftValue = function(root) {
  const queue = [root];
  while(queue.length){
      root = queue.shift();
      root.right && queue.push(root.right)
      root.left && queue.push(root.left)
  }
  return root.val;
};