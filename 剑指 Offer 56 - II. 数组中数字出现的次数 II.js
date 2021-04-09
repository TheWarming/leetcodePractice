/* 剑指 Offer 56 - II. 数组中数字出现的次数 II
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

 

示例 1：

输入：nums = [3,4,3,3]
输出：4
示例 2：

输入：nums = [9,1,7,9,7,9,7]
输出：1 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const MAP = new Map();
  nums.forEach(n => {
      MAP.set(n,MAP.has(n)?MAP.get(n)+1:1)
  })
  for(let key of MAP.keys()){
      if(MAP.get(key) === 1) return key
  }
};