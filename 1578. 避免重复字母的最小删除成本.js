/* 1578. 避免重复字母的最小删除成本
给你一个字符串 s 和一个整数数组 cost ，其中 cost[i] 是从 s 中删除字符 i 的代价。

返回使字符串任意相邻两个字母不相同的最小删除成本。

请注意，删除一个字符后，删除其他字符的成本不会改变。

 

示例 1：

输入：s = "abaac", cost = [1,2,3,4,5]
输出：3
解释：删除字母 "a" 的成本为 3，然后得到 "abac"（字符串中相邻两个字母不相同）。 */

/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
  let ans = 0
  for(let i = 1; i < s.length; i++){
      if(s[i] === s[i-1]){
          if(cost[i-1] > cost[i]){
              ans += cost[i]
              cost[i] = cost[i-1]
          }else{
              ans += cost[i-1]
          }
      }
  }
  return ans
};