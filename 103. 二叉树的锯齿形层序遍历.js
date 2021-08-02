/* 103. 二叉树的锯齿形层序遍历
给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7 */
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(!root) return []
  const arr = [root]
  let flag = true
  const ans = []
  while(arr.length){
      const len = arr.length
      const temp = []
      for(let i = 0; i < len;i++){
          const node = arr.shift()
          flag ? temp.push(node.val) : temp.unshift(node.val)
          node.left && arr.push(node.left)
          node.right && arr.push(node.right)
      }
      flag = !flag
      ans.push(temp)
  }
  return ans
};