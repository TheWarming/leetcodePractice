/* 75. 颜色分类
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

 

示例 1：

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
示例 2：

输入：nums = [2,0,1]
输出：[0,1,2] */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let p0 = 0, p1 = 0
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === 1){
          [nums[i],nums[p1]] = [nums[p1],nums[i]]
          p1++
      }else if(nums[i] === 0){
          [nums[i],nums[p0]] = [nums[p0],nums[i]]
          //有可能把1换出去了，所以要换回来
          if(p0 < p1){
              [nums[i],nums[p1]] = [nums[p1],nums[i]]
          }
          p1++
          p0++
      }
  }
  return nums
};