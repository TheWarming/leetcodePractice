/* 894. 所有可能的满二叉树
满二叉树是一类二叉树，其中每个结点恰好有 0 或 2 个子结点。

返回包含 N 个结点的所有可能满二叉树的列表。 答案的每个元素都是一个可能树的根结点。

答案中每个树的每个结点都必须有 node.val=0。

你可以按任何顺序返回树的最终列表。

 

示例：

输入：7
输出：[[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
解释：

 

提示：

1 <= N <= 20
通过次数10,746提交次数 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const memo = new Map();
var allPossibleFBT = function(N) {
  if (!memo.has(N)) {
      const ans = [];
      if (N == 1) {
          ans.push(new TreeNode(0));
      } else if (N % 2 == 1) {
          for (let x = 0; x < N; ++x) {
              const y = N - 1 - x;
              allPossibleFBT(x).forEach(left => {
                  allPossibleFBT(y).forEach(right => {
                      const bns = new TreeNode(0);
                      bns.left = left;
                      bns.right = right;
                      ans.push(bns);
                  })
              })
          }
      }
      memo.set(N, ans);
  }
  return memo.get(N);
};