/* 1760. 袋子里最少数目的球
给你一个整数数组 nums ，其中 nums[i] 表示第 i 个袋子里球的数目。同时给你一个整数 maxOperations 。

你可以进行如下操作至多 maxOperations 次：

选择任意一个袋子，并将袋子里的球分到 2 个新的袋子中，每个袋子里都有 正整数 个球。
比方说，一个袋子里有 5 个球，你可以把它们分到两个新袋子里，分别有 1 个和 4 个球，或者分别有 2 个和 3 个球。
你的开销是单个袋子里球数目的 最大值 ，你想要 最小化 开销。

请你返回进行上述操作后的最小开销。

 

示例 1：

输入：nums = [9], maxOperations = 2
输出：3
解释：
- 将装有 9 个球的袋子分成装有 6 个和 3 个球的袋子。[9] -> [6,3] 。
- 将装有 6 个球的袋子分成装有 3 个和 3 个球的袋子。[6,3] -> [3,3,3] 。
装有最多球的袋子里装有 3 个球，所以开销为 3 并返回 3 。 */

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
  let l = 0, r = 1000000000
  let ans = 0
  while(l <= r){
      const m = Math.floor((r-l)/2) + l
      if(check(m,nums,maxOperations)){
          r = m - 1
          ans = m
      }else{
          l = m + 1
      }
  }
  return ans 

  function check(m,nums,maxOperations){
      let count = 0
      for(const n of nums){
          if(n % m === 0){
              count += n / m - 1
          }else{
              //不能用parseInt  因为parseInt( 9/249999999.5) 结果是3
              count += Math.floor(n/m)
          }
      }
      return count <= maxOperations
  }
}