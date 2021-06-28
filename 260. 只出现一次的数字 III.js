/* 260. 只出现一次的数字 III
给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。

 

进阶：你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

 

示例 1：

输入：nums = [1,2,1,3,2,5]
输出：[3,5]
解释：[5, 3] 也是有效的答案。
示例 2：

输入：nums = [-1,0]
输出：[-1,0]
示例 3：

输入：nums = [0,1]
输出：[1,0] */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let ret = 0;
  for (let n of nums) {
      //全部数字异或
      ret ^= n;
  }
  let div = 1;
  while ((div & ret) === 0) {
      //找出ret中不为0的一位
      div <<= 1;
  }
  let a = 0, b = 0;
  for (let n of nums) {
      //分组，只出现一次的两个元素  那一位div是不相同的
      if ((div & n) !== 0) {
          a ^= n;
      } else {
          b ^= n;
      }
  }
  return [a,b]
};