/* 1137. 第 N 个泰波那契数
泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

 

示例 1：

输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
示例 2：

输入：n = 25
输出：1389537 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if(n === 0) return 0
  if(n === 1 || n === 2) return 1
  let tn = 0;
  let tn1 = 1;
  let tn2 = 1;
  while(n > 3){
      let temp = tn2;
      tn2 += tn + tn1
      tn = tn1;
      tn1 = temp;
      n--
  }
  return tn + tn1 + tn2
};