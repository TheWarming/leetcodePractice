/* 491. 递增子序列
给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。

数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

 

示例 1：

输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
示例 2：

输入：nums = [4,4,3,2,1]
输出：[[4,4]] */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const temp = []
  const ans = []
  dfs(0,-1000)
  return ans

  function dfs(i,n){
      const set = new Set()
      if(temp.length >= 2){
          ans.push([...temp])
      }
      for(let j = i; j < nums.length ; j++){
          if(n > nums[j]) continue
          if(set.has(nums[j])) continue
          set.add(nums[j])
          temp.push(nums[j])
          dfs(j+1,nums[j])
          temp.pop()
      }
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const temp = []
  const ans = []
  dfs(0, -1000, nums);
  return ans;

  function dfs(cur, last, nums) {
      if (cur === nums.length) {
          if (temp.length >= 2) {
              ans.push([...temp]);
          }
          return;
      }
      if (nums[cur] >= last) {
          temp.push(nums[cur]);
          dfs(cur + 1, nums[cur], nums);
          temp.pop();
      }

      //相同的情况下只要前面的，不要后面
      if (nums[cur] != last) {
          dfs(cur + 1, last, nums);
      }
  }
}