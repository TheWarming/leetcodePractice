// 1508. 子数组和排序后的区间和
// 给你一个数组 nums ，它包含 n 个正整数。你需要计算所有非空连续子数组的和，并将它们按升序排序，得到一个新的包含 n * (n + 1) / 2 个数字的数组。

// 请你返回在新数组中下标为 left 到 right （下标从 1 开始）的所有数字和（包括左右端点）。由于答案可能很大，请你将它对 10^9 + 7 取模后返回。

 

// 示例 1：

// 输入：nums = [1,2,3,4], n = 4, left = 1, right = 5
// 输出：13 
// 解释：所有的子数组和为 1, 3, 6, 10, 2, 5, 9, 3, 7, 4 。将它们升序排序后，我们得到新的数组 [1, 2, 3, 3, 4, 5, 6, 7, 9, 10] 。下标从 le = 1 到 ri = 5 的和为 1 + 2 + 3 + 3 + 4 = 13 。

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
  const M =  1e9+7
  const arr = []
  for(let i = 0; i < nums.length; i++){
      let sum = 0
      for(let j = i; j < nums.length; j++){
          sum += nums[j]
          arr.push(sum)
      }
  }
  arr.sort((a,b) => a-b)
  let ans = 0
  for(let i = left-1; i < right; i++){
      ans = (ans + arr[i])%M
  }   
  return ans
};