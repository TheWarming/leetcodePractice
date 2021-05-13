/* 1433. 检查一个字符串是否可以打破另一个字符串
给你两个字符串 s1 和 s2 ，它们长度相等，请你检查是否存在一个 s1  的排列可以打破 s2 的一个排列，或者是否存在一个 s2 的排列可以打破 s1 的一个排列。

字符串 x 可以打破字符串 y （两者长度都为 n ）需满足对于所有 i（在 0 到 n - 1 之间）都有 x[i] >= y[i]（字典序意义下的顺序）。

 

示例 1：

输入：s1 = "abc", s2 = "xya"
输出：true
解释："ayx" 是 s2="xya" 的一个排列，"abc" 是字符串 s1="abc" 的一个排列，且 "ayx" 可以打破 "abc" 。 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
  const ns1 = s1.split('').sort().join('')
  const ns2 = s2.split('').sort().join('')
  let flag1 = true
  let flag2 = true 
  for(let i = 0; i < ns1.length; i++){
      if(ns1[i] < ns2[i]){
          flag1 = false
      }
      if(ns2[i] < ns1[i]){
          flag2 = false
      }
      if(!flag1&&!flag2){
          break
      }
  }
  return flag1 || flag2
};