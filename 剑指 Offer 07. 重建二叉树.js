/* 剑指 Offer 07. 重建二叉树
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7 */

   /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const inMap = new Map()
  inorder.forEach((n,i) => {
      inMap.set(n,i)
  })

  let preInd = 0
  let l = 0;
  let r = inorder.length-1;
  function helper(l,r){
      if(l > r) return null
      const n = preorder[preInd++]
      const node = new TreeNode(n)

      const i = inMap.get(n)
      node.left = helper(l,i-1)
      node.right = helper(i+1,r)
      return node
  }

  return helper(l,r)
}; 