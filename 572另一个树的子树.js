/* 572. 另一个树的子树
给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

示例 1:
给定的树 s:

     3
    / \
   4   5
  / \
 1   2
给定的树 t：

   4 
  / \
 1   2
返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

示例 2:
给定的树 s：

     3
    / \
   4   5
  / \
 1   2
    /
   0
给定的树 t：

   4
  / \
 1   2
返回 false。

通过次数55,961提交次数118,551 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    let flag = false;
    const help = function(node){
        if(flag) return
        if(!node) return  
        if(node.val === t.val){
            flag = true
            compare(node,t);
        }
        help(node.left);
        help(node.right);
    }
    const compare = function(node,cnode){
        if(!node && !cnode) return
        if(!cnode || !node||(node.val !== cnode.val)) {
            flag = false;
            return
        }
        compare(node.left,cnode.left);
        compare(node.right,cnode.right);
    }
    help(s)
    return flag
};