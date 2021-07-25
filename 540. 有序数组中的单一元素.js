/* 540. 有序数组中的单一元素
给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。

 

示例 1:

输入: nums = [1,1,2,3,3,4,4,8,8]
输出: 2 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  //二分法
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
      let mid = lo + parseInt((hi - lo) / 2);
      // 让mid保持为偶数
      if (mid % 2 == 1) mid--;
      if (nums[mid] == nums[mid + 1]) {
          lo = mid + 2;
      } else {
          hi = mid;
      }
  }
  return nums[lo];
};