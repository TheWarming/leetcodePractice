/* 1887. 使数组元素相等的减少操作次数
给你一个整数数组 nums ，你的目标是令 nums 中的所有元素相等。完成一次减少操作需要遵照下面的几个步骤：

找出 nums 中的 最大 值。记这个值为 largest 并取其下标 i （下标从 0 开始计数）。如果有多个元素都是最大值，则取最小的 i 。
找出 nums 中的 下一个最大 值，这个值 严格小于 largest ，记为 nextLargest 。
将 nums[i] 减少到 nextLargest 。
返回使 nums 中的所有元素相等的操作次数。

 

示例 1：

输入：nums = [5,1,3]
输出：3
解释：需要 3 次操作使 nums 中的所有元素相等：
1. largest = 5 下标为 0 。nextLargest = 3 。将 nums[0] 减少到 3 。nums = [3,1,3] 。
2. largest = 3 下标为 0 。nextLargest = 1 。将 nums[0] 减少到 1 。nums = [1,1,3] 。
3. largest = 3 下标为 2 。nextLargest = 1 。将 nums[2] 减少到 1 。nums = [1,1,1] 。 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
  nums.sort((a,b) => a - b)
  let preV = nums[0]
  let preN = 0;
  let ans = 0;
  for(let i = 1; i < nums.length; i++){
      if(nums[i] !== preV){
          preV = nums[i]
          preN++ 
      }
      ans += preN
  }
  return ans
};