/* 429. N 叉树的层序遍历
给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

  */

  /**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  const queue = [root]
  const ans = []
  while(queue.length){
      let len = queue.length
      ans.push([])
      const i = ans.length-1
      while(len){
          len--
          const node = queue.shift()
          ans[i].push(node.val)
          if(node.children.length){
              node.children.forEach(n => {
                  queue.push(n)
              })
          }
      }
  }
  return ans
};