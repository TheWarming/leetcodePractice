/* 105. 从前序与中序遍历序列构造二叉树
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const map = new Map()
  inorder.forEach((v,i) => {
      map.set(v,i)
  })

  let index = 0
  function helper(l,r){
      if(l > r) return null
      const v = preorder[index++]
      const node = new TreeNode(v)

      const i = map.get(v)
      node.left = helper(l,i-1)
      node.right = helper(i+1,r)
      return node
  }
  return helper(0,inorder.length-1)
};