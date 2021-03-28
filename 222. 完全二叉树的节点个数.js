/* 222. 完全二叉树的节点个数
给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

 

示例 1：


输入：root = [1,2,3,4,5,6]
输出：6 */

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

 //暴力  不推荐
var countNodes = function(root) {
  if(root === null) return 0
  return countNodes(root.left) + countNodes(root.right) + 1
};

const exists = (root, level, k) => {
  let bits = 1 << (level - 1);
  let node = root;
  while (node !== null && bits > 0) {
      if (!(bits & k)) {
          node = node.left;
      } else {
          node = node.right;
      }
      bits >>= 1;
  }
  return node !== null;
}

var countNodes = function(root) {
  if (root === null) {
      return 0;
  }
  let level = 0;
  let node = root;
  while (node.left !== null) {
      level++;
      node = node.left;
  }
  let low = 1 << level, high = (1 << (level + 1)) - 1;
  while (low < high) {
      const mid = Math.floor((high - low + 1) / 2) + low;
      if (exists(root, level, mid)) {
          low = mid;
      } else {
          high = mid - 1;
      }
  }
  return low;
};

var countNodes = function(root) {
  if (root==null) return 0;
  const ld = getDepth(root.left);
  const rd = getDepth(root.right);
  if(ld === rd) return (1 << ld) + countNodes(root.right); // 1(根节点) + (1 << ld)-1(左完全左子树节点数) + 右子树节点数量
  else return (1 << rd) + countNodes(root.left);  // 1(根节点) + (1 << rd)-1(右完全右子树节点数) + 左子树节点数量
  function getDepth(r) {
      let depth = 0;
      while(r != null) {
          depth++;
          r = r.left;
      }
      return depth;
  }
};