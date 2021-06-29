/* 1277. 统计全为 1 的正方形子矩阵
给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。

 

示例 1：

输入：matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
输出：15
解释： 
边长为 1 的正方形有 10 个。
边长为 2 的正方形有 4 个。
边长为 3 的正方形有 1 个。
正方形的总数 = 10 + 4 + 1 = 15. */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  if(!matrix.length) return 0
  const row = matrix.length
  const col = matrix[0].length
  const m = [...new Array(row+1)].map(()=>Array(col+1).fill(0)) // dp
  let res = 0
  for(let i=0;i<row;i++) {
      for(let j=0;j<col;j++) {
          if(matrix[i][j]) {
              m[i+1][j+1] = Math.min(m[i][j],m[i+1][j],m[i][j+1]) + 1
              res += m[i+1][j+1]
          }
      }
  }
  return res
};