/* 96. 不同的二叉搜索树
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:

输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3 */

   /**
 * @param {number} n
 * @return {number}
 */

var numTrees = function(n) {
  const G = new Array(n + 1).fill(0);

  /* 当序列长度为 1（只有根）或为 0（空树）时，只有一种情况 */
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; ++i) {
      for (let j = 1; j <= i; ++j) {
/*         给定序列 1⋯n，我们选择数字 i 作为根，
        则根为 i 的所有二叉搜索树的集合是左子树集合和右子树集合的笛卡尔积，
        对于笛卡尔积中的每个元素，加上根节点之后形成完整的二叉搜索树， */
          G[i] += G[j - 1] * G[i - j];
      }
  }
  return G[n];
};


 //公式 卡塔兰数 
var numTrees = function(n) {
  let C = 1;
  for (let i = 0; i < n; ++i) {
      C = C * 2 * (2 * i + 1) / (i + 2);
  }
  return C;
};