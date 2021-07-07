/* 518. 零钱兑换 II
给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

假设每一种面额的硬币有无限个。 

题目数据保证结果符合 32 位带符号整数。

 

示例 1：

输入：amount = 5, coins = [1, 2, 5]
输出：4
解释：有四种方式可以凑成总金额：
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1 */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (const coin of coins) {
      // 记录每添加一种面额的零钱，总金额j的变化
      for (let j = 1; j <= amount; j++) {
          if (j >= coin) {
              // 在上一钟零钱状态的基础上增大
              // 例如对于总额5，当只有面额为1的零钱时，只有一种可能 5x1
              // 当加了面额为2的零钱时，除了原来的那一种可能外
              // 还加上了组合了两块钱的情况，而总额为5是在总额为3的基础上加上两块钱来的
              // 所以就加上此时总额为3的所有组合情况
              dp[j] += dp[j - coin];
          }
      }
  }
  return dp[amount]
};