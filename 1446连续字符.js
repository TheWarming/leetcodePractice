/* 1446. 连续字符
给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。

请你返回字符串的能量。

 

示例 1：

输入：s = "leetcode"
输出：2
解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。 */

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let count = 1;
  let ans = 1;
  for(let i = 1; i < s.length; i++){
       if(s[i] === s[i-1]){
           count++
       }else{
           ans = Math.max(ans,count)
           count = 1;
       }
  }
  if(count !== 1){
      ans = Math.max(ans,count)
  }
  return ans
};