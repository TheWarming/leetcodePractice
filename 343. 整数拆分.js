/* 343. 整数拆分
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

示例 1:

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if(n === 2)
      return 1;
  if(n === 3)
      return 2;
  let a = 1;
  while(n > 4){
      n -= 3;
      a *= 3;
  }
  return a * n;
};