/* 238. 除自身以外数组的乘积
给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

 

示例:

输入: [1,2,3,4]
输出: [24,12,8,6] */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const len = nums.length
  //i的乘积就是左侧所有元素的乘积乘以右侧所有元素的乘积

  const left = new Array(len);
  //对于i===0时候，左侧乘积为1
  left[0] = 1
  //对于剩下的i  其乘积为前一个乘积乘以nums[i-1]
  for(let i = 1; i < len; i++){
      left[i] = left[i-1]*nums[i-1]
  }

  const right = new Array(len);
  right[len-1] = 1
  for(let i = len-2; i >= 0; i--){
      right[i] = right[i+1]*nums[i+1]
  }
  
  const ans = new Array(len)
  for(let i = 0; i < len; i++){
      ans[i] = left[i] * right[i]
  }
  return ans
};