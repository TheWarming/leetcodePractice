/* 1380. 矩阵中的幸运数
给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。

幸运数是指矩阵中满足同时下列两个条件的元素：

在同一行的所有元素中最小
在同一列的所有元素中最大
 

示例 1：

输入：matrix = [[3,7,8],[9,11,13],[15,16,17]]
输出：[15]
解释：15 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;
  const rset = new Set()
  const cset = new Set()
  for(let r = 0; r < R; r++){
      let min = Number.MAX_SAFE_INTEGER
      for(let c = 0; c < C; c++){  
          min = Math.min(min,matrix[r][c])
      }
      rset.add(min)
  }
  for(let c = 0; c < C; c++){
      let max = Number.MIN_SAFE_INTEGER
      for(let r = 0; r < R; r++){
          max = Math.max(max,matrix[r][c])
      }
      cset.add(max)
  }
  const ans = [];
  for(let v of rset){
      if(cset.has(v)){
          ans.push(v)
      }
  }
  return ans
};