/* 474. 一和零
给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。

如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

 

示例 1：

输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出：4
解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。 */

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = new Array(101).fill(0).map(n => new Array(101).fill(0))
  for (const str of strs){
      let one = 0, zero = 0;
      for (let c of str.split('')){
          if(c==='1')
              ++one;
          else
              ++zero;
      }
      for (let j=m; j>=zero; --j){
          for (let k=n; k>=one; --k){
              dp[j][k] = Math.max(dp[j][k], dp[j-zero][k-one] + 1);
          }
      }
  }
  return dp[m][n];
};