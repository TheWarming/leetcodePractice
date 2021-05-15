/* 90. 子集 II
给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

示例 1：

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const ans = [[]]
  const temp = []
  nums.sort((a,b) => a-b)
  function helper(n){
      for(let i = n; i < nums.length; i++){
          if(nums[i] === nums[i-1] && i > n) continue
          temp.push(nums[i])
          ans.push([...temp])
          helper(i+1)
          temp.pop()
      }
  }
  helper(0)
  return ans
};