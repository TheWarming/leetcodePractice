/* 78. 子集
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const ans = [[]] //先加入空集

  /**每次遇到一个新的数字，就重新遍历ans，给每个数组都加上这个新的数字 */
  for(let i = 0; i < nums.length; i++){
      const len = ans.length;
      for(let j = 0; j < len; j++){
          const arr = [...ans[j]];
          arr.push(nums[i])
          ans.push(arr)
      }
  }
  return ans
};