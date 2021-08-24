/* 930. 和相同的二元子数组
给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

子数组 是数组的一段连续部分。

 

示例 1：

输入：nums = [1,0,1,0,1], goal = 2
输出：4
解释：
有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1] */

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  /*假设原数组的前缀和数组为sum，且子数组 (i,j] 的区间和为 goal，
    那么 sum[j]-sum[i]=goal。因此我们可以枚举 j ，每次查询满足该等式的 i 的数量。

    具体地，我们用哈希表记录每一种前缀和出现的次数，
    假设我们当前枚举到元素 nums[j]，
    我们只需要查询哈希表中元素 sum[j]−goal 的数量即可，
    这些元素的数量即对应了以当前 j 值为右边界的满足条件的子数组的数量。
    最后这些元素的总数量即为所有和为 goal 的子数组数量。
  */
  const MAP = new Map()
  let sum = 0
  let ans = 0
  for(const n of nums){
      MAP.set(sum,(MAP.get(sum) || 0)+1)
      sum += n
      ans += MAP.get(sum - goal) || 0
  }
  return ans
};