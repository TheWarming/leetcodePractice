/* 1161. 最大层内元素和
给你一个二叉树的根节点 root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。

请你找出层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中 最小 的那个。

 

示例 1：



输入：root = [1,7,0,7,-8,null,null]
输出：2
解释：
第 1 层各元素之和为 1，
第 2 层各元素之和为 7 + 0 = 7，
第 3 层各元素之和为 7 + -8 = -1，
所以我们返回第 2 层的层号，它的层内元素之和最大。 */

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
var maxLevelSum = function(root) {
  let max = -Number.MAX_VALUE
  const queue = [root]
  let ans = 0
  let cen = 0
  while(queue.length){
      cen++
      const len = queue.length;
      let sum = 0
      for(let i = 0; i < len; i++){
          const node = queue.shift()
          sum += node.val
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
      if(max < sum){
          max = sum
          ans = cen
      }
  }

  return ans
};