/* 442. 数组中重复的数据
给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。

找到所有出现两次的元素。

你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？

示例：

输入:
[4,3,2,7,8,2,3,1]

输出:
[2,3] */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 这个题属于技巧题 首先仔细看输入的给定的数组值 该值的区间为 1 ≤ a[i] ≤ n
 * 这其实是这道题解题的关键点，好好利用这个信息。 某些元素出现了两次，
 * 而一些其他的元素只出现了1次，我们可以利用这些元素在出现次数上面的不一样做文章。
 */
var findDuplicates = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      let num = Math.abs(nums[i]);
      if (nums[num - 1] > 0) {
          nums[num - 1] *= -1;
      } else {
          result.push(num);
      }
  }
  return result;
};