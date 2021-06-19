/* 229. 求众数 II
给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。

 

示例 1：

输入：[3,2,3]
输出：[3]
示例 2：

输入：nums = [1]
输出：[1]
示例 3：

输入：[1,1,1,3,3,2,2,2]
输出：[1,2] */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let n1 = nums[0]
  let n2 = nums[0]
  let c1 = 0
  let c2 = 0
  for(let n of nums){
      if(n === n1){
          c1++
          continue
      }
      if(n === n2){
          c2++
          continue
      }
      if(c1 === 0){
          n1 = n
          c1 = 1
          continue
      }
      if(c2 === 0){
          n2 = n
          c2 = 1
          continue
      }
      c1--
      c2--
  }
  const ans = []
  c1 = 0
  c2 = 0
  for(let n of nums){
      if(n === n1){
          c1++
      }else if(n === n2){
          c2++
      }
  }
  const cp = parseInt(nums.length/3)
  c1 > cp && ans.push(n1)
  c2 > cp && ans.push(n2)
  return ans
};