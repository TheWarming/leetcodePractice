/* 面试题 08.07. 无重复字符串的排列组合
无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。

示例1:

 输入：S = "qwe"
 输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"] */
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
  const temp = S.split(''); //字符串转为数组
  const len = temp.length;//长度
  let res = []; //结果
  dfs(0);
  return res;
  function dfs(k) {
      if(k === len) { //结束条件
          res.push(temp.join('')); //加入结果
          return;
      }
      for(let i = k; i < len; i++) {
          [temp[i], temp[k]] = [temp[k], temp[i]]; //交换位置
          dfs(k + 1);                              //递归
          [temp[i], temp[k]] = [temp[k], temp[i]]; //回溯
      }
  }
};