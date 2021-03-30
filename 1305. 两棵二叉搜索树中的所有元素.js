/* 1305. 两棵二叉搜索树中的所有元素
给你 root1 和 root2 这两棵二叉搜索树。

请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.

 

示例 1：



输入：root1 = [2,1,4], root2 = [1,0,3]
输出：[0,1,1,2,3,4] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const ans = []
  helper(root1)
  helper(root2)
  ans.sort((a,b) => a-b);
  return ans

  function helper(node){
      if(node === null) return
      helper(node.left);
      ans.push(node.val);
      helper(node.right);
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const arr1 = []
  const arr2 = []
  helper(root1,arr1)
  helper(root2,arr2)
  let i = 0;
  let j = 0;
  const ans = []
  while(i < arr1.length || j < arr2.length){
    //归并排序
    if(i < arr1.length && (arr1[i] < arr2[j] || j === arr2.length)){
      ans.push(arr1[i++])
    }else{
      ans.push(arr2[j++])
    }
  }
  return ans

  function helper(node,arr){
      if(node === null) return
      helper(node.left,arr);
      arr.push(node.val);
      helper(node.right,arr);
  }
};