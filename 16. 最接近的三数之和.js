/* 16. 最接近的三数之和
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

 

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let ans = Number.MAX_VALUE
  for(let i = 0; i < nums.length-2; i++){
      for(let j = i + 1; j < nums.length-1; j++){
          for(let k = j + 1; k < nums.length; k++){
              const sum = nums[i] + nums[j] + nums[k]
              if(Math.abs(ans-target) > Math.abs(sum-target)){
                  ans = sum
              }
          }
      }
  }
  return ans
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let ans = Number.MAX_VALUE
  nums.sort((a,b) => a-b)
  for(let i = 0; i < nums.length-2; i++){
      let l = i + 1, r = nums.length-1
      while(l < r){
          const sum = nums[i] + nums[l] + nums[r]
          if(Math.abs(ans - target) > Math.abs(sum - target)){
              ans = sum
          }
          if(sum > target){
              r--
          }else if(sum < target){
              l++
          }else{
              return sum
          }
      }
  }
  return ans
};