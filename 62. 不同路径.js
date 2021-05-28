/* 62. 不同路径
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？ */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let a  = m+n-2
  let b = Math.min(m,n)-1
  let sum = 1
  const count = b
  for(let i = 1; i <= count; i++){
      sum = sum*a/b
      a--
      b--
  }
  return sum
};