/* 386. 字典序排数
给定一个整数 n, 返回从 1 到 n 的字典顺序。

例如，

给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。

请尽可能的优化算法的时间复杂度和空间复杂度。 输入的数据 n 小于等于 5,000,000。

通过次数16,822 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  let i = 0;
  let arr = new Array(n)
  arr = arr.fill(0).map(n => ++i)
  arr.sort()
  return arr
};

/**
 * @param {number} n
 * @return {number[]}
 */

 // 重点看dfs！！！
var lexicalOrder = function(n) {
  const res = [];
  for (let i = 1; i < 10; i ++){
          dfs(i);
      }
  return res;

  function dfs(cur){
      if (cur > n) return;
      res.push(cur);
      for (let i = 0; i < 10; i ++) {
          dfs(cur * 10 + i);
      }
  }
};