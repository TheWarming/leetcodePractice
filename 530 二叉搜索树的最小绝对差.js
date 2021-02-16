/* 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

 

示例：

输入：

   1
    \
     3
    /
   2

输出：
1

解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let arr = [];
    const help = function(node){
        if(!node) return
        help(node.left);
        arr.push(node.val)
        help(node.right);
    }
    help(root);
    return arr.reduce((pre,cur,ind,arr) => Math.min(pre,arr[ind - 1] !== undefined?cur - arr[ind - 1]:pre),Number.MAX_SAFE_INTEGER)
};

var getMinimumDifference = function(root) {
    let pre = null;
    let res = Number.MAX_SAFE_INTEGER;
    const help = function(node){
        if(!node) return
        help(node.left);
        if(pre !== null){
            res = Math.min(res,node.val - pre)
        }
        pre = node.val;
        help(node.right);
    }
    help(root)
    return res
};