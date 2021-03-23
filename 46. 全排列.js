/* 46. 全排列
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const len = nums.length
  const temp = [...nums]
  let res = []; //结果
  dfs(0);
  return res;
  function dfs(k) {
      if(k === len) { //结束条件
          res.push([...temp]); //加入结果
          return;
      }
      for(let i = k; i < len; i++) {
          [temp[i], temp[k]] = [temp[k], temp[i]]; //交换位置
          dfs(k + 1);                              //递归
          [temp[i], temp[k]] = [temp[k], temp[i]]; //回溯
      }
  }
};