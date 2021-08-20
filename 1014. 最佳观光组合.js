/* 1014. 最佳观光组合
给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。

一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去 它们两者之间的距离。

返回一对观光景点能取得的最高分。

 

示例 1：

输入：values = [8,1,5,2,6]
输出：11
解释：i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11 */

/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
  let ans = 0
  let left = values[0]
  for(let i = 1; i  < values.length; i++){
      ans = Math.max(left + values[i] - i,ans)
      left = Math.max(left,values[i]+i)
  }
  return ans
};