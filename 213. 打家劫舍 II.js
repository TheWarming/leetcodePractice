/* 213. 打家劫舍 II
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

 

示例 1：

输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length === 1) return nums[0]
  if(nums.length === 2) return Math.max(nums[0],nums[1])
  let s1_1 = nums[0]
  let s1_2 = Math.max(nums[0],nums[1])

  let s2_1 = nums[1]
  let s2_2 = Math.max(nums[1],nums[2])
  for(let i = 2; i < nums.length-1; i++){

      //把环拆开成两组  一组要第一个不要最后一个，一组不要第一个要最后一个
      const temp1 = s1_2
      s1_2 = Math.max(s1_2,s1_1+nums[i])
      s1_1 = temp1

      const temp2 = s2_2
      s2_2 = Math.max(s2_2,s2_1+nums[i+1])
      s2_1 = temp2
  }
  return Math.max(s1_2,s2_2)
};