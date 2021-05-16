/* 47. 全排列 II
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

 

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]] */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  //去重需要排序
  nums.sort((a,b) => a-b)
  const temp = []
  const ans = []
  const len = nums.length

  //用于记录使用情况
  const count = []
  function helper(){
      if(temp.length === len){
          ans.push([...temp])
          return
      }
      for(let i = 0; i < len; i++){
          if(count[i]) continue //用过就跳过  这是一步步回溯用的
          if(i > 0 && !count[i-1] && nums[i] === nums[i-1]) continue  
          //排序的作用，与前一个一样，而且前一个没有用过，就跳过，这是for循环用的（每次循环又把count设置为false了）
          
          count[i] = true
          temp.push(nums[i])
          helper()
          count[i] = false
          temp.pop()
      }
  }
  helper()
  return ans
};