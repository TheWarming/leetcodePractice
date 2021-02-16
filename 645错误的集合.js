/* 645. 错误的集合
集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。

给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

示例 1:

输入: nums = [1,2,2,4]
输出: [2,3]
注意:

给定数组的长度范围是 [2, 10000]。
给定的数组是无序的。 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* 
算法

排序 numsnums 数组后，相等的两个数字将会连续出现。此外，检查相邻的两个数字是否只相差 1 可以找到缺失数字。 */

var findErrorNums = function(nums) {
  nums.sort((a,b) => a - b);
  let dp = -1;
  //注意为一
  let mis = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1])
            dp = nums[i];
        else if (nums[i] > nums[i - 1] + 1)
            mis = nums[i - 1] + 1;
    }
    //最后还要判断
  return [dp,nums[nums.length - 1] != nums.length ? nums.length:mis]
};