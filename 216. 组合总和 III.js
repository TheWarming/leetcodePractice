/* 216. 组合总和 III
找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：

所有数字都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: k = 3, n = 7
输出: [[1,2,4]] */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const ans = [];
  const temp = [];
  function helper(j,m,sum){
      if(sum > n) return
      if(m === k){
          sum === n && ans.push([...temp])
          return
      }
      for(let i = j; i <= 9; i++){
          temp.push(i)
          helper(i+1,m+1,sum+i)
          temp.pop()
      }
  }
  helper(1,0,0)
  return ans
};