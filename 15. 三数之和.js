/* 15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const n = nums.length;
  nums.sort((a,b) => a-b)
  const ans = []
  // 枚举 a
  for (let first = 0; first < n; ++first) {
      if(nums[first] > 0) return ans
      // 需要和上一次枚举的数不相同
      if (first > 0 && nums[first] === nums[first - 1]) {
          continue;
      }
      // c 对应的指针初始指向数组的最右端
      let third = n - 1;
      const target = -nums[first];
      // 枚举 b
      for (let second = first + 1; second < n; ++second) {
          // 需要和上一次枚举的数不相同
          if (second > first + 1 && nums[second] === nums[second - 1]) {
              continue;
          }
          // 需要保证 b 的指针在 c 的指针的左侧
          while (second < third && nums[second] + nums[third] > target) {
              --third;
          }
          // 如果指针重合，随着 b 后续的增加
          // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
          if (second === third) {
              break;
          }
          if (nums[second] + nums[third] === target) {
              const list = [nums[first],nums[second],nums[third]]
              ans.push(list);
          }
      }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const n = nums.length;
  nums.sort((a,b) => a-b)
  const ans = []
  for (let first = 0; first < n; ++first) {
      if(nums[first] > 0) return ans
      if (first > 0 && nums[first] === nums[first - 1]) {
          continue;
      }
      const target = - nums[first]
      let l = first + 1
      let r = n-1;
      while(l < r){
        const sum = nums[l] + nums[r]
        if(sum < target){
          l++
        }else if(sum > target){
          r--
        }else{
          ans.push([nums[first],nums[l],nums[r]])
          l++
          r--
          while(l < r && nums[l] === nums[l-1]) l++
          while(l < r && nums[r] === nums[r+1]) r--
        }
      }
  }
  return ans;
};