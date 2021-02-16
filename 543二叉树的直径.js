/* class Solution {
    int ans;
    public int diameterOfBinaryTree(TreeNode root) {
        ans = 1;
        depth(root);
        return ans - 1;
    }
    public int depth(TreeNode node) {
        if (node == null) {
            return 0; // 访问到空节点了，返回0
        }
        int L = depth(node.left); // 左儿子为根的子树的深度
        int R = depth(node.right); // 右儿子为根的子树的深度
        ans = Math.max(ans, L+R+1); // 计算d_node即L+R+1 并更新ans
        return Math.max(L, R) + 1; // 返回该节点为根的子树的深度
    }
}

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/diameter-of-binary-tree/solution/er-cha-shu-de-zhi-jing-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */

var diameterOfBinaryTree = function(root) {
    if(!root) return 0
    const help = function(node){
        if(node === null){
            return 0
        }
        const l = help(node.left);
        const r = help(node.right);
        ans = Math.max(ans,l+r+1);
        return Math.max(l,r) + 1;
    }
    let ans = 0;
    help(root);
    return ans - 1
};