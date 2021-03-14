/* 面试题 08.04. 幂集
幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。

说明：解集不能包含重复的子集。

示例:

 输入： nums = [1,2,3]
 输出：
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const ans= []
  ans.push([]);
  getSets(ans,0,nums);
  return ans;

  function getSets(ans,i,nums) {
    if(i === nums.length) return;
        const len = ans.length;
        for(let j = 0; j < len; j++){
            const temp = [...ans[j]]
            temp.push(nums[i])
            ans.push(temp)
        }
    getSets(ans, i+1, nums);
  }
}