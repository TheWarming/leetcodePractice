/* 1641. 统计字典序元音字符串的数目
给你一个整数 n，请返回长度为 n 、仅由元音 (a, e, i, o, u) 组成且按 字典序排列 的字符串数量。

字符串 s 按 字典序排列 需要满足：对于所有有效的 i，s[i] 在字母表中的位置总是与 s[i+1] 相同或在 s[i+1] 之前。

 

示例 1：

输入：n = 1
输出：5
解释：仅由元音组成的 5 个字典序字符串为 ["a","e","i","o","u"] */

/**
 * @param {number} n
 * @return {number}
 */

var countVowelStrings = function(n) {
  let ans = 0;
  let index = 0;
  function helper(m,start){
      if(m === index){
          ans++
          return
      }
      for(let i = start; i < 5; i++){
          index++
          helper(m,i)
          index--
      }
  }
  helper(n,0)
  return ans
};