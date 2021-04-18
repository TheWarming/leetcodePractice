/* 设计并实现一个算法，找出二叉树中某两个节点的第一个共同祖先。不得将其他的节点存储在另外的数据结构中。注意：这不一定是二叉搜索树。

例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]

    3
   / \
  5   1
 / \ / \
6  2 0  8
  / \
 7   4
示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/first-common-ancestor-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/* 自底向上从叶子节点开始更新的，所以在所有满足条件的公共祖先中一定是深度最大的祖先先被访问到，且由于 f_xf x
​	
  本身的定义很巧妙，在找到首个共同祖先 xx 以后，f_xf x
​	
  按定义被设置为 true ，即假定了这个子树中只有一个 pp 节点或 qq 节点，因此其他公共祖先不会再被判断为符合条件 */
var lowestCommonAncestor = function(root, p, q) {
  let ans = null;
  function helper(node,p,q){
      if(node === null) return false
      const l = helper(node.left,p,q)
      const r = helper(node.right,p,q)
      if((l&&r) || ((l||r) && (node.val === q.val || node.val === p.val))){
          ans = node
      }
      return l || r || (node.val === q.val || node.val === p.val)
  }
  helper(root,p,q)
  return ans
};