/* 718. 最长重复子数组
给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

 

示例：

输入：
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出：3
解释：
长度最长的公共子数组是 [3, 2, 1] 。 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  let ans = 0
  const dp = new Array(nums1.length+1).fill(0).map(n => new Array(nums2.length+1).fill(0))
  for(let i = 0; i < nums1.length; i++){
      for(let j = 0; j < nums2.length; j++){
          if(nums1[i] === nums2[j]){
              dp[i+1][j+1] = dp[i][j]+1
              ans = Math.max(ans,dp[i+1][j+1])
          }
      }
  }
  return ans
};