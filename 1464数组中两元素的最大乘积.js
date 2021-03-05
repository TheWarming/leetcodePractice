/* 1464. 数组中两元素的最大乘积
给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。

请你计算并返回该式的最大值。

 

示例 1：

输入：nums = [3,4,5,2]
输出：12 
解释：如果选择下标 i=1 和 j=2（下标从 0 开始），则可以获得最大值，(nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12 。  */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max1 = -1;
  let max2 = -1;
  nums.forEach(n => {
      if(n > max1){
          max2 = max1
          max1 = n; 
      }else if(n > max2){
          max2 = n
      }
  })
  return (max1-1)*(max2-1)
};