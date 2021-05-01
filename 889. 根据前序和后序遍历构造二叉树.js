/* 889. 根据前序和后序遍历构造二叉树
返回与给定的前序和后序遍历匹配的任何二叉树。

 pre 和 post 遍历中的值是不同的正整数。

 

示例：

输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
输出：[1,2,3,4,5,6,7] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

/* 只有每个节点度为2或者0的时候前序和后序才能唯一确定一颗二叉树，只有一个子节点是无法确定的，因为你无法判断他是左子树还是右子树 */
var constructFromPrePost = function(pre, post) {
  let preInd = 0;
  let postInd = 0
  return helper(pre,post)

  function helper(pre,post){
      const node = new TreeNode(pre[preInd++])
      if(node.val !== post[postInd]){//先左子树
          node.left = helper(pre,post)
      }
      if(node.val !== post[postInd]){//后右子树
          node.right = helper(pre,post)
      }
      postInd++
      return node
  }
};