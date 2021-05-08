/* 1457. 二叉树中的伪回文路径
给你一棵二叉树，每个节点的值为 1 到 9 。我们称二叉树中的一条路径是 「伪回文」的，当它满足：路径经过的所有节点值的排列中，存在一个回文序列。

请你返回从根到叶子节点的所有路径中 伪回文 路径的数目。

 

示例 1：



输入：root = [2,3,1,3,1,null,1]
输出：2 
解释：上图为给定的二叉树。总共有 3 条从根到叶子的路径：红色路径 [2,3,3] ，绿色路径 [2,1,1] 和路径 [2,3,1] 。
     在这些路径中，只有红色和绿色的路径是伪回文路径，因为红色路径 [2,3,3] 存在回文排列 [3,2,3] ，绿色路径 [2,1,1] 存在回文排列 [1,2,1] 。 */

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
var pseudoPalindromicPaths  = function(root) {
  const arr = new Array(9)
  arr.fill(0)
  let ans = 0
  function helper(node){
      arr[node.val - 1] += 1
      if(!node.left&&!node.right){
          let count = 0;
          for(let i = 0; i < arr.length; i++){
              if(arr[i]%2 === 1){
                  count++
              }
          }
          if(count === 0 || count === 1){
              ans++
          }
          return
      }
      if(node.left){
          helper(node.left)
          arr[node.left.val - 1] -= 1
      }
      if(node.right){
          helper(node.right)
          arr[node.right.val - 1] -= 1
      } 
  }
  helper(root)
  return ans
};

/* 用set存储 偶数次从set移除 奇数次往set添加 只有set.SIZE() 在0-1之间才是回文 */
function pseudoPalindromicPaths (root) {
  let count = 0;
  helper(root,new Set());
  return count;

  function helper(root,set){
      if(root===null)return;
      if(root.left==null&&root.right==null){
          if(set.size===0||set.size<=2&&set.has(root.val))count++;
          return;
      }
      set.has(root.val) ? set.delete(root.val) : set.add(root.val);
      helper(root.left,set);
      helper(root.right,set);
      set.has(root.val) ? set.delete(root.val) : set.add(root.val);
  }
}