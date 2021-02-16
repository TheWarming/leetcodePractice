/* 697. 数组的度
给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

示例 1:

输入: [1, 2, 2, 3, 1]
输出: 2
解释: 
输入数组的度是2，因为元素1和2的出现频数最大，均为2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组[2, 2]的长度为2，所以返回2.
示例 2:

输入: [1,2,2,3,1,4,2]
输出: 6 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  if(!nums.length) return 0
  let max = 1;
  let res = Number.MAX_SAFE_INTEGER;
  const myMap = new Map();
  nums.forEach((item,index) => {
      if(!myMap.get(item)){
          myMap.set(item,{first:index,du:1,last:index})
      }else{
          const obj = myMap.get(item);
          obj.last = index;
          obj.du++
          max = Math.max(obj.du,max);
      }
  })
  myMap.forEach((obj) => {
      if(max === obj.du){
          res = Math.min(res,obj.last - obj.first + 1)
      }
  })
  return res
};