/* 583. 两个字符串的删除操作
给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。

 

示例：

输入: "sea", "eat"
输出: 2
解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea" */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const n = word1.length
  const m = word2.length
  //dp[i][j]表示word1[0...i - 1]与word2[0...j-1]的最大公共子序列长度
  const dp = new Array(n+1).fill(0).map(n => new Array(m+1).fill(0))
  for(let i = 1; i <= n; i++){
      for(let j = 1; j <= m; j++){
          if(word1[i-1] === word2[j-1]){
              dp[i][j] = dp[i-1][j-1] + 1
          }else{
              dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
          }
      }
  }
  return m + n - 2*dp[n][m]
};