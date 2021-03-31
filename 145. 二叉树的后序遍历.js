/* 145. 二叉树的后序遍历
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？ */

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const ans = []
  const stack = []
  let prev = null;
  while(root !== null || stack.length !== 0){
      while(root !== null){
          stack.push(root)
          root = root.left
      }
      root = stack.pop();
      if (root.right === null || root.right === prev) {
          ans.push(root.val);
          prev = root;
          root = null;
      } else {
          stack.push(root);
          root = root.right;
      }
  }
  return ans
};

var postorderTraversal = function(root) {
  const ans = []
  const helper = (node) => {
      if(node === null) return
      helper(node.left)
      helper(node.right)
      ans.push(node.val)
  }
  helper(root)
  return ans
};

var postorderTraversal = function(root) {
  const res = []
  if(root === null) return res;
  const stack = []
  stack.push(root);
  while(stack.length !== 0){
      const node = stack.pop();
      if(node.left !== null) stack.push(node.left);//和传统先序遍历不一样，先将左结点入栈
      if(node.right !== null) stack.push(node.right);//后将右结点入栈
      res.unshift(node.val)                      //逆序添加结点值
  }     
  return res;
};