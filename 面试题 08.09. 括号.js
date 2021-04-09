/* 面试题 08.09. 括号
括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。

说明：解集不能包含重复的子集。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
] */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ans = [];
  function helper(l,r,str){
      if(l > n || r > n || l < r) {
          return
      };
      if(l === n && r === n){
          ans.push(str)
          return
      }
      helper(l+1,r,str+'(')
      helper(l,r+1,str+')')
  }
  helper(0,0,'')
  return ans
};