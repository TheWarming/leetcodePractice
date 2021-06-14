/* 337. 打家劫舍 III
在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

示例 1:

输入: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

输出: 7 
解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7. */

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
const map = new Map()
var rob = function(root) {
    const map = new Map()
    return dfs(root)

    function dfs(root){
        if(root === null) return 0
        if(map.has(root)) return map.get(root)

        //打劫该点所获取的点数
        let robSum = root.val
        if(root.left){
            robSum += dfs(root.left.left) + dfs(root.left.right)
        }
        if(root.right){
            robSum += dfs(root.right.left) + dfs(root.right.right)
        }

        //不打劫该点所获取的点数
        const norobSum = dfs(root.left) + dfs(root.right)
        const ans = Math.max(robSum,norobSum)
        map.set(root,ans)
        return ans
    }
};