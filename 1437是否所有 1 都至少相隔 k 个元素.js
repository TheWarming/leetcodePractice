/* 1437. 是否所有 1 都至少相隔 k 个元素
给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True ；否则，返回 False 。

 

示例 1：



输入：nums = [1,0,0,0,1,0,0,1], k = 2
输出：true
解释：每个 1 都至少相隔 2 个元素。 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let count = -1
  for(let n of nums){
      if(n === 1){
          if(count === -1 || count >= k){
              count = 0
              continue
          }else{
              return false
          }
      }else{
          if(count === -1){
              continue
          }else{
              count++
          }  
      }
  }
  return true
};

//只需要记录下标
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let n = nums.length;
  let prev = -1;
  for (let i = 0; i < n; i++) {
      if (nums[i] === 1) {
          if (prev !== -1 && i - prev - 1 < k) {
              return false;
          }
          prev = i;
      }
  }
  return true;
};