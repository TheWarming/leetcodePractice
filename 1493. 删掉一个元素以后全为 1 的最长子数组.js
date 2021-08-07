/* 1493. 删掉一个元素以后全为 1 的最长子数组
给你一个二进制数组 nums ，你需要从中删掉一个元素。

请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。

如果不存在这样的子数组，请返回 0 。

 

提示 1：

输入：nums = [1,1,0,1]
输出：3
解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
示例 2：

输入：nums = [0,1,1,1,0,1,1,0,1]
输出：5
解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  const arr = [-1]
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === 0){
          arr.push(i)
      }
  }
  if(arr.length === 1) return nums.length-1
  if(arr.length === nums.length + 1) return 0
  arr.push(nums.length)
  let ans = 0
  for(let i = 1; i < arr.length-1;i++){
      ans = Math.max(arr[i+1]-arr[i-1]-2,ans)
  }
  return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let maxn = 0,l = 0,r = 0;
  for(let i = 0;i < nums.length;i++){
      if(nums[i] == 1){
          r++;
      }
      else if(nums[i] == 0){
          l = r;
          r = 0; 
      }
      maxn = Math.max(maxn,l+r);
  }
  if(maxn == nums.length) return maxn-1;
  else return maxn;
};