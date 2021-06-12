/* 740. 删除并获得点数
给你一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

 

示例 1：

输入：nums = [3,4,2]
输出：6
解释：
删除 4 获得 4 个点数，因此 3 也被删除。
之后，删除 2 获得 2 个点数。总共获得 6 个点数。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const max = Math.max(...nums) + 1
  const scores = new Array(max).fill(0)
  for(let n of nums){
      scores[n] += n
  }
  let dp = new Array(max)
  dp[0] = 0
  dp[1] = scores[1]
  for(let i = 2; i < max; i++){
      dp[i] = Math.max(dp[i-1],dp[i-2]+scores[i])
  }
  return dp[max-1]
};