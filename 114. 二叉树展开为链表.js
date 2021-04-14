/* 114. 二叉树展开为链表
给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。
  */

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const ans = []
  const stack = []
  let node = root
  while(node || stack.length > 0){
      while(node){
          ans.push(node);
          stack.push(node)
          node = node.left
      }
      node = stack.pop();
      node = node.right
  }
  node = root
  for(let i = 1; i < ans.length; i++){
      node.left = null;
      node.right = ans[i]
      node = node.right
  }
};

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) {
      return;
  }
  const stack = [];
  stack.push(root);
  let prev = null;
  while (stack.length) {
      const curr = stack.pop();
      if (prev !== null) {
          prev.left = null;
          prev.right = curr;
      }
      const left = curr.left, right = curr.right;
      if (right !== null) {
          stack.push(right);
      }
      if (left !== null) {
          stack.push(left);
      }
      prev = curr;
  }
};