/* 1110. 删点成林
给出二叉树的根节点 root，树上每个节点都有一个不同的值。

如果节点值在 to_delete 中出现，我们就把该节点从树上删去，最后得到一个森林（一些不相交的树构成的集合）。

返回森林中的每棵树。你可以按任意顺序组织答案。 */

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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  const set = new Set(to_delete)
  const ans = [root]
  dfs(root,null,0)

  return ans

  function dfs(node,pre,ty){
      if(!node) return
      if(set.has(node.val)){
          if(ty === 1){
              pre.left = null
          }else if(ty === 2){
              pre.right = null
          }else{
              ans.pop()
          }
          node.left && !set.has(node.left.val) && ans.push(node.left)
          node.right && !set.has(node.right.val) && ans.push(node.right)
      }
      dfs(node.left,node,1)
      dfs(node.right,node,2)    
  }
};

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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  const set = new Set(to_delete)
  const ans = []
  if(!set.has(root.val)){
      ans.push(root)
  }
  dfs(root)

  return ans

    //后续遍历  并且是把自身复制为null
  function dfs(node){
      if(!node) return null
      node.left =  dfs(node.left)
      node.right = dfs(node.right)
      if(set.has(node.val)){
          node.left && ans.push(node.left)
          node.right && ans.push(node.right)
          node = null
      }
      return node
  }
};