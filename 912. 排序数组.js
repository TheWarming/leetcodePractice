/* 912. 排序数组
给你一个整数数组 nums，请你将该数组升序排列。

 

示例 1：

输入：nums = [5,2,3,1]
输出：[1,2,3,5]
示例 2：

输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5] */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if(nums.length < 2) return nums
  const m = nums.splice(Math.floor(nums.length/2),1)[0];
  const left = []
  const right = []
  for(let n of nums){
      n < m ? left.push(n) : right.push(n)
  }
  return sortArray(left).concat(m,sortArray(right))
};