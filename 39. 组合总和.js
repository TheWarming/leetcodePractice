/* 39. 组合总和
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
] */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let temp = [];
  let ans = [];
  candidates.sort((a,b) => a-b)
  function helper(sum,start){
      if(sum > target) return
      if(sum === target){
          ans.push([...temp])
          return
      }
      for(let i = start; i < candidates.length; i++){
          const n = candidates[i]
          temp.push(n);
          sum += n
          helper(sum,i);
          temp.pop(n)
          sum -= n
      }
  }
  helper(0,0);
  return ans
};