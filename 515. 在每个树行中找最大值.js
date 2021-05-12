/* 515. 在每个树行中找最大值
您需要在二叉树的每一行中找到最大的值。

示例：

输入: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

输出: [1, 3, 9] */

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
var largestValues = function(root) {
  if(!root) return []
  const queue = [root]
  const ans = []
  while(queue.length){
      const len = queue.length;
      let max = -Number.MAX_SAFE_INTEGER
      for(let i = 0; i < len; i++){
          const node = queue.shift()
          max = Math.max(max,node.val)
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
      ans.push(max)
  }
  return ans
};