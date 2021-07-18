/* 1685. 有序数组中差绝对值之和
给你一个 非递减 有序整数数组 nums 。

请你建立并返回一个整数数组 result，它跟 nums 长度相同，且result[i] 等于 nums[i] 与数组中所有其他元素差的绝对值之和。

换句话说， result[i] 等于 sum(|nums[i]-nums[j]|) ，其中 0 <= j < nums.length 且 j != i （下标从 0 开始）。

 

示例 1：

输入：nums = [2,3,5]
输出：[4,3,5]
解释：假设数组下标从 0 开始，那么
result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4，
result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3，
result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5。 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  const ans = new Array(nums.length)
  let pre = 0
  let n = nums.length
  const sum = nums.reduce((pre,n) => pre+n)
  for(let i = 0; i < nums.length; i++){
      ans[i] = sum - (n - 2*i) * nums[i] - 2*pre
      pre += nums[i]
  }
  return ans
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  const ans = new Array(nums.length)
  let n = nums.length
  ans[0] = nums.reduce((pre,n) =>  pre+n-nums[0],0)
  for(let i = 1; i < nums.length; i++){
      ans[i] = ans[i-1] + (nums[i] - nums[i-1]) * (2*i - n)
  }
  return ans
};