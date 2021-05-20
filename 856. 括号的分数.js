/* 856. 括号的分数
给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

() 得 1 分。
AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
(A) 得 2 * A 分，其中 A 是平衡括号字符串。
 

示例 1：

输入： "()"
输出： 1 */

/**
 * @param {string} s
 * @return {number}
 */

/* O(N)时间复杂度，O(1)空间复杂度

每一个左括号意味层数深一层，也就是*2，每一个右括号意味着层数减一层，也就是/2 */
var scoreOfParentheses = function(S) {
  let multi = 1;
  let res = 0;
  for(let i = 0;i < S.length;i++) {
      if(S[i] == '(') multi *= 2;
      else {
          multi = parseInt(multi/2);
          if(S[i - 1] =='(') res += multi;
      }
  }
  return res;
};