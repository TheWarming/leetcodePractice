/* 22. 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"] */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  if(n <= 0){
      return res;
  }
  getParenthesis("",n,n);
  return res;

  function getParenthesis(str,left,right) {
      if(left === 0 && right === 0 ){
          res.push(str);
          return;
      }
      if(left === right){
          //剩余左右括号数相等，下一个只能用左括号
          getParenthesis(str+"(",left-1,right);
      }else if(left < right){
          //剩余左括号小于右括号，下一个可以用左括号也可以用右括号
          if(left > 0){
              getParenthesis(str+"(",left-1,right);
          }
          getParenthesis(str+")",left,right-1);
      }
  }
};