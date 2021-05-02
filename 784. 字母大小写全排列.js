/* 784. 字母大小写全排列
给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。

 

示例：
输入：S = "a1b2"
输出：["a1b2", "a1B2", "A1b2", "A1B2"]

输入：S = "3z4"
输出：["3z4", "3Z4"]

输入：S = "12345"
输出：["12345"] */

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const ans = []
  const len = S.length
  function helper(s,ind){
      for(let i = ind; i < len; i++){
          if(!isNaN(parseInt(S[i]))){
              s += S[i]
          }else{
              helper(s+S[i].toLocaleLowerCase(),i+1)
              helper(s+S[i].toLocaleUpperCase(),i+1)
              break
          }
      }
      if(s.length === len){
          ans.push(s)
          return
      }
  }
  helper('',0)
  return ans
};