/* 881. 救生艇
第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。

每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

返回载到每一个人所需的最小船数。(保证每个人都能被船载)。

 

例 1：

输入：people = [1,2], limit = 3
输出：1
解释：1 艘船载 (1, 2) */

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a,b) => a-b)
  let ans = 0
  let left = 0, right = people.length-1
  while(left <= right){
      //一艘船最多坐两个人
      if(people[left] + people[right] <= limit){
          left++
      }
      right--
      ans++
  }
  return ans
};