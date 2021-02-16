/* 643. 子数组最大平均数 I
给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

 

示例：

输入：[1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  if(k === 1) return Math.max(...nums)
  let sum = Number.MIN_SAFE_INTEGER;
  let pre = 0;
  for(let i = 0; i < nums.length;i++){
      if(i < k){
          pre += nums[i];
      }else {
          sum = Math.max(sum,pre)
          pre = pre - nums[i - k] + nums[i]
      }
  }
  return Math.max(sum,pre)/k
};