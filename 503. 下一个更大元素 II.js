/* 503. 下一个更大元素 II
给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

示例 1:

输入: [1,2,1]
输出: [2,-1,2]
解释: 第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数； 
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const arr = []
  for(let i = 0; i < nums.length; i++){
      let j = i === nums.length - 1 ? 0 : i + 1
      while(j !== i){
          if(nums[j] > nums[i]){
              arr.push(nums[j])
              break
          }
          j++
          if(j === nums.length){
              j = 0
          }
      }
      if(j === i){
          arr.push(-1)
      }
  }
  return arr
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const n = nums.length;
  const ret = new Array(n).fill(-1);
  const stk = [];
  for (let i = 0; i < n * 2 - 1; i++) {
      while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
          ret[stk[stk.length - 1]] = nums[i % n];
          stk.pop();
      }
      stk.push(i % n);
  }
  return ret;
};